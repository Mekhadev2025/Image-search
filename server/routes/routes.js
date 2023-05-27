const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");

router.post("/signup", (req, res) => {
  const signupUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    email: req.body.email,
    username:req.body.username,
    password:req.body.password
    
  });

  signupUser.save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;
