const User = require("../models/userModel");
const mongoose = require("mongoose");

exports.signup = async (req, res, next) => 
{
    console.log(req.body);
    
    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: req.body.password,
        role: "client"
    })

    const userModel = mongoose.model("User");
    const query = {login: "admin"}
    const update = {
        $setOnInsert: {
            login: "admin",
            email: "admin@simplechatapp.fr",
            password: "admin",
            role: "admin"
        }
    }
    const options = {upsert: true}
    userModel.findOneAndUpdate(query, update, options)
    .catch(error => console.error(error))
    await user.save().then(() => res.status(201).json({message: "User created successfully !"}))
    console.log("user saved successfully !");
}