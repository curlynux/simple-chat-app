const User = require("../models/userModel");
const express = require("express");
const app = express();

exports.signup = async (req, res, next) => 
{

    console.log(req.body);
    const user = new User({
        login: req.body.login, 
        email: req.body.email, 
        password: req.body.password, 
        role: req.body.role
    });
    await user.save().then(() => res.status(201).json({message: "User created successfully !"}))
    console.log("user saved successfully !");
}