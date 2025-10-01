const usermodel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserController = async (req, res) => {
  let { name, email, phone, password, role } = req.body;
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
    });

    let token = jwt.sign({ id: newuser._id, role: newuser.role }, "hehehe");
    res.cookie("token", token);
    res.status(201).json({ success: true, user: newuser });
  } catch (error) {
    console.log(error);
  }
};

const AdminController = async (req, res) => {
  let { name, email, phone, password, role } = req.body;
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
      role: "admin",
    });

    let token = jwt.sign({ id: newuser._id, role: newuser.role }, "hehehe");
    res.cookie("token", token);
    res.status(201).json({ success: true, user: newuser });
  } catch (error) {
    console.log(error);
  }
};

const loginController = async (req, res) => {
  try {
    let { email, password, phone } = req.body;

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

    let token = jwt.sign({ id: user._id, role: user.role }, "hehehe");
    res.cookie("token", token);

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { UserController, AdminController, loginController };
