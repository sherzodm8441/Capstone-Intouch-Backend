require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { db } = require('./db')
const { User } = require('./db')
const session = require('express-session')
const passport = require('passport')
require('./auth')


passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  }
  catch (err) {
    done(err);
  }
});


const app = express()
const port = process.env.PORT || "5000"

app.use(cors(
    {
    origin: "*",
    credentials: true
}
))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use(session({secret : process.env.SESSION_SECRET, resave: false,
    saveUninitialized: false,}))




app.use(passport.initialize());
app.use(passport.session());


app.use('/api', require('./api/index'))
app.use("/auth", require("./api/authRouter"));
app.use("/customAuth", require("./customAuth"));
app.use('/sms', require('./sendMessage'))

db.sync({force : true}).then(() => {
    console.log("Successfully connected to db") 
}).catch((error) => {
    console.log(error)
})

app.listen(port, () => console.log(`app listening on port ${port}`))