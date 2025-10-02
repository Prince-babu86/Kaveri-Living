const tiffinmodel = require("../models/tiffin.model");

const createTiffinRequest = async (req, res) => {
  let { name, phone, college, date } = req.body;
  try {
    if (!name || !phone || !college || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    let newtiffin = await tiffinmodel.create({
      user: req.user._id,
      name,
      phone,
      college,
      date,
    });

    res.status(201).json({ success: true, tiffin: newtiffin });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { createTiffinRequest };
