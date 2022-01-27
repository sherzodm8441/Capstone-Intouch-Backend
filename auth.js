const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
require("dotenv").config();
const User = require("./db/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (_, __, profile, done) => {
      const account = profile._json;
      
      let user = {};
      try {
        const currentUserQuery = await User.findOne({where : {googleId : account.sub}})

        if (!currentUserQuery) {
          // create user
          await User.create({
            firstName : account.given_name,
            googleId : account.sub,
            imageUrl : account.picture
          })

          const id = await User.findOne({where : {googleId : account.sub}})
          console.log(id.dataValues.id)
          user = {
            id: id.dataValues.id,
            name: account.given_name,
            img: account.picture,
          };
        } else {
          // have user
          user = {
            id: currentUserQuery.dataValues.id,
            googleId : account.sub,
            name: currentUserQuery.dataValues.firstName,
            imageUrl: currentUserQuery.dataValues.imageUrl,
          };
        }
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// passport.serializeUser((user, done) => {
//   // loads into req.session.passport.user
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   // loads into req.user
//   done(null, user);
// });