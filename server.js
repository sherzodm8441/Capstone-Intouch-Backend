require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { db } = require('./db')
const session = require('express-session')
const passport = require('passport')
require('./auth')


const app = express()
const port = process.env.PORT || "5000"

app.use(cors({
    name: "session",
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use(session({secret : process.env.SESSION_SECRET, resave: false,
    saveUninitialized: false,}))




app.use(passport.initialize());
app.use(passport.session());


app.use('/api', require('./api/index'))

const authRouter = require("./api/authRouter");
app.use("/auth", authRouter);

db.sync().then(() => {
    console.log("Successfully connected to db") 
}).catch((error) => {
    console.log(error)
})

app.listen(port, () => console.log(`app listening on port ${port}`))