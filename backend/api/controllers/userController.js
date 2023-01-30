const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { log } = require("console");

exports.signup = async (req, res, next) => 
{
    console.log(req.body);
    const hashed_password = await bcrypt.hash(req.body.password, 10)
    log(hashed_password)
    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: hashed_password,
        role: "client"
    })

    const query = {login: "admin"}
    const admin_password = await bcrypt.hash("admin", 10)
    const update = {
        $setOnInsert: {
            login: "admin",
            email: "admin@simplechatapp.fr",
            password: admin_password,
            role: "admin"
        }
    }
    const options = {upsert: true}
    User.findOneAndUpdate(query, update, options)
    .catch(error => console.error(error))
    await user.save().then(() => res.status(201).json({message: "User created successfully !"}))
    console.log("user saved successfully !");
}

exports.login = (req, res, next) =>
{
    User.findOne({email: req.body.email} || {login: req.body.login})
    .then((user) => 
    {
        bcrypt.compare(req.body.password, user.password)
        .then((valid) => 
        {
            if(!valid)
                return res.status(401).json({message: "user credentials inccorect !"})
            else
            {
                try {
                    res.status(200).json({userId: user._id, 
                        token: jwt.sign({userId: user._id}, "RANDOM_TOKEN_SECRET", {expiresIn: "24h"}
                    )
                });
                // req.setHeader()
                } catch (error) {
                    res.status(401).json({message: `and it's an error ! ${error}`})
                }
            }
        });
    });
}