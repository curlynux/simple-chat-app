const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => 
{
        try {
            var token = req.headers.authorization.split(" ")[1];
            var decode_token = jwt.verify(token, "RANDOM_TOKEN_SECRET");
            var user_id = decode_token.userId;
            req.auth = {user_id: user_id}
            next()
        } catch (error) {
            res.status(401).json({message: `error: ${error}`})
        }
}