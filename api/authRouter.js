const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
    ////if(req.user){
        res.send("hi auth");
    //}else{
    //    res.send('please login');
    //}
  
});

router.get("/login/success", (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        user: req.user,
      });
    }
  });

router.get( "/google",
  passport.authenticate("google", {
    scope: "profile",
  })
);

router.get( "/google/callback",
  passport.authenticate("google", { session: true, successRedirect: "https://intouchttp.netlify.app" }),
  (req, res) => {
    res.send(req.user);
  }
);

//this is back in
// , successRedirect: "https://intouchttp.netlify.app/"

router.get("/logout", (req, res) => {
    req.logout();
    req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    else {
      res.status(204)
    }
  });
  res.redirect("http://localhost:5000/auth");
});

module.exports = router;