const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Message = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    login: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    }
});
Message.plugin(uniqueValidator);
module.exports = mongoose.model("Message", Message);