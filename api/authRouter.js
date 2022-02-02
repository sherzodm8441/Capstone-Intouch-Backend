const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
    ////if(req.user){
        res.send("hi");
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
    }else{
        res.send("You are not logged in")
    }
  });

router.get( "/google",
  passport.authenticate("google", {
    scope: "profile",
  })
);

router.get( "/google/callback",
  passport.authenticate("google", { session: true, successRedirect: "https://intouchttp.netlify.app/"}),
  (req, res) => {
    res.send(req.user);
  }
);

//this is back in
// , successRedirect: "https://intouchttp.netlify.app/"

// router.get("/logout", (req, res) => {
//     req.logout();
//     req.session.destroy((err) => {
//     if (err) {
//       //return next(err);
//       console.log(error)
//     }
//     else {
//       res.status(204)
//     }
//   });
//   res.redirect("/auth")
// });

module.exports = router;