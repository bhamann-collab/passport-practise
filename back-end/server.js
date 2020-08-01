const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
//const passport = require('passport');
//const passportLocal = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser')

const app = express();

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(4000, () => {
    console.log("Server Has Started")
})