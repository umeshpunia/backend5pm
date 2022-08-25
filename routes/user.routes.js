const express = require("express");
const UserSchema = require("../models/user.model");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User API");
});

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: "Please Enter Details" });

  // generate bcrpt
  bcrypt.hash(password, 12, (err, hashPass) => {
    if (err) return res.status(500).json({ msg: err.message });
    if (!hashPass) return res.status(501).json({ msg: "Please Try Again" });
    // insert user into database
    let insUser = new UserSchema({ email, password:hashPass });
  
    insUser.save((err, data) => {
      if (err) return res.status(500).json({ msg: err.message });
      if (!data) return res.status(501).json({ msg: "Dont Know" });
      res.status(200).json({ msg: "Done" });
    });

  });

});

router.get("/users", (req, res) => {
  UserSchema.find({}, (err, data) => {
    if (err) return res.status(500).json({ msg: err.message });
    if (data.length < 1) return res.status(200).json({ msg: "No User Found" });
    res.status(200).json({ msg: data });
  });
});








module.exports = router;
