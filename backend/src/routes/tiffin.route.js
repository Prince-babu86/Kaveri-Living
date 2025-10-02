const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { createTiffinRequest } = require("../controllers/tiffin.controller");
const Tiffinmodel = require("../models/tiffin.model");

const router = express.Router();


router.post("/create" , authMiddleware ,  createTiffinRequest);

router.get("/", async (req, res) => {
  try {
    // Get start and end of today
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    // Find all tiffins for today
    let tiffins = await Tiffinmodel.find({
      date: { $gte: startOfToday, $lte: endOfToday }
    });

    res.status(200).json(tiffins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});





module.exports = router;