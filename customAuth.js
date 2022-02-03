const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require('./db')
const bcrypt = require('bcrypt')

// router.post("/signup", async (req, res, next) => {
//     try {
//       const user = await User.create(req.body);
//       req.login(user, err => (err ? next(err) : res.json(user)));
//     }
//     catch (err) {
//       console.log(err)
//     }
// });
router.post("/signup", async (req, res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10) //encrypts user password
    const addUser = await User.create({
        firstName : req.body.firstName,
        password : hashedPassword
    })
    res.json(addUser)
  }catch(error){
    res.status(404).send(error.message)
  }
});

// router.post("/signin", async (req, res, next) => {
//     try {
//       const user = await User.findOne({ where: { firstName: req.body.firstName, password : req.body.password } });
      
//       if (!user) {
//         res.status(401).send("Wrong username and/or password");
//       }
//       else {
//         req.login(user, err => (err ? next(err) : res.json(user)));
//       }
//     }
//     catch (err) {
//       console.log(err)
//     }
//   });
router.post("/signin", async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { firstName: req.body.firstName } }); 
      
      if (!user) {
        res.status(401).send("Wrong username and/or password or the user might not exist");
      }
      else {
        if(await bcrypt.compare(req.body.password, user.password)){
          req.login(user, err => (err ? next(err) : res.json(user)));
        }else{
          res.status(401).send("Wrong username and/or password");
        } 
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