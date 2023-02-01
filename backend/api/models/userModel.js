const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const User = new mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: { type: String, default: "client" }
});

User.plugin(uniqueValidator);
module.exports = mongoose.model("User", User);