const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require('./db')

router.post("/signup", async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
    catch (err) {
      console.log(err)
    }
});

router.post("/signin", async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { firstName: req.body.firstName, password : req.body.password } });
      
      if (!user) {
        res.status(401).send("Wrong username and/or password");
      }
      else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    }
    catch (err) {
      console.log(err)
    }
  });

  router.get("/me", (req, res) => {
    res.json(req.user);
  });

router.get("/logout", (req, res) => {
    req.logout();
    req.session.destroy((err) => {
    if (err) {
      //return next(err);
      console.log(error)
    }
    else {
      res.status(204).send("logout success")
    }
  });
  //res.redirect("/auth")
});

module.exports = router