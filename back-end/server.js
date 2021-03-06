const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require("cookie-parser");
const bcrype = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secretcode"))
//routes
app.post("/login", (req, res) => {
    console.log(req.body);
})
app.post("/register", (req, res) => {
    console.log(req.body)
})
app.get('/user', (req, res) => {
    
})
app.get('/', (req, res) => {
    console.log(req.session)
    res.send(`hello ${req.session.views}`)
})

app.listen(4000, () => {
    console.log("Server Has Started")
})