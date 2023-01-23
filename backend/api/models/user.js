const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const User = new mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    role: { type: String, default: "client" }
});

User.plugin(uniqueValidator);
module.exports = mongoose.model("User", User);