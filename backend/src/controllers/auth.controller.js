const usermodel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserController = async (req, res) => {
  let { name, email, phone, password, room } = req.body;
  try {
    let user = await usermodel.findOne({
      $or: [{ email }, { phone }],
    });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    let newuser = await usermodel.create({
      name,
      email,
      phone,
      password: await bcrypt.hash(password, 10),
      role: "user",
      room:room,
    });

    let token = jwt.sign({ id: newuser._id, role: newuser.role }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res.status(201).json({ success: true, user: newuser });
  } catch (error) {
    console.log(error);
  }
};

const AdminController = async (req, res) => {
  let { name, email, phone, password, room, confirmPassword } = req.body;

  try {
    if (!name || !email || !phone || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    let user = await usermodel.findOne({
      email,
    });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    let newuser = await usermodel.create({
      name,
      email,
      phone,
      password: await bcrypt.hash(password, 10),
      role: "admin",
      room,
    });

    let token = jwt.sign({ id: newuser._id, role: newuser.role }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true, // JS cannot access it → prevents XSS
      secure: false, // true if using HTTPS (production), false for dev
      sameSite: "Lax", // prevents CSRF; "Strict" or "None" possible
      maxAge: 24 * 60 * 60 * 1000, // cookie expires in 1 day (milliseconds)
      path: "/", // cookie is valid across entire site
    });

    res.status(201).json({ success: true, user: newuser });
  } catch (error) {
    console.log(error);
  }
};

const loginController = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await usermodel.findOne({
      email,
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    let token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.cookie("token", token);

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { UserController, AdminController, loginController };
