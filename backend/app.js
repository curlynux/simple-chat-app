const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
require("dotenv").config();
const userRoutes = require("./api/routes/userRoutes");

mongoose.set("strictQuery", true);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(userRoutes)

app.use((req, res, next) =>
    {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Origin", "Origin, X-requested-With, Content, Accept, Content-Type, Authorization");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
        next();
    });

mongoose.connect(`mongodb+srv://${process.env.MONGOLOGIN}:${process.env.MONGOPASSWORD}@simple-chat-app.gzhk7e9.mongodb.net/?retryWrites=true&W=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
.then(() => console.log("connected successfully to MongoDB Atlas !"))
.catch(() => console.log("connexion to mongodb failed !"));

module.exports = app;
