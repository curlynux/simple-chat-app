const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { log, error } = require("console");

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
    .catch(async (error) => {return await error(error)})
    await user.save().then(async () => {return await res.status(201).json({message: "User created successfully !"})})
}

exports.login = async (req, res, next) =>
{
    await User.findOne({email: req.body.email} || {login: req.body.login})
    .then(async (user) => 
    {
        await bcrypt.compare(req.body.password, user.password)
        .then(async (valid) => 
        {
            if(!valid)
                return res.status(401).json({message: "user credentials inccorect !"})
            else
            {
                try {
                    return await res.status(200).json({userId: user._id, 
                        token: jwt.sign({userId: user._id}, "RANDOM_TOKEN_SECRET", {expiresIn: "24h"}
                    )
                });
                // req.setHeader()
                } catch (error) {
                    return res.status(401).json({message: `and it's an error ! ${error}`})
                }
            }
        });
    });
}

exports.user = async (req, res, next) => 
{
    console.log(req.body.userId);
    return await User.findOne({_id: req.body.userId})
    .then(async (user) => {
        console.log(user);
        // console.
        return await res.status(200).json(user)
    })
    .catch((error) => res.status(400).json({message: `got a new error: ${error}`}))
}