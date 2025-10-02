const express = require("express");
const { UserController, AdminController, loginController } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Auth route");
});

router.post("/user-register", UserController);
router.post("/admin-register" , AdminController);
// router.post("/staff-register");
router.post("/login", loginController);


router.get("/cookie" , authMiddleware , (req,res) => {
  res.send("Logout route")
})

router.get("/dd" , authMiddleware , (req , res) =>  {
  let user = req.user
  res.send({user})
})


router.post("/test" , (req,res) => {
  let {email , password} = req.body
  res.send({email,password})
  // res.send("Test route")
})


module.exports = router;

