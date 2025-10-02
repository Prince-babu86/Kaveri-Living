// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      
    },
    role: {
      type: String,
      enum: ["user", "warden", "admin", "staff"],
      default: "student",
    },
    profilePic: {
      type: String,
      default: "default.png", // can be uploaded later
    },
    room:{
      type: String,
      required:true,
      trim:true,
      default:0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
