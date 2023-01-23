const User = require("../models/userModel");
const express = require("express");
const app = express();

exports.signup = (req, res, next) => 
{
    console.log(req.body);
    const user = new User({
        login: req.body.login, 
        email: req.body.email, 
        password: req.body.password, 
        role: req.body.role
    });
    // user.save().then(() => console.log("user saved successfully !"))
}