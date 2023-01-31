const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Message = new mongoose.model({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    }
});
Message.plugin(uniqueValidator);
module.exports = mongoose.model("Message", Message);