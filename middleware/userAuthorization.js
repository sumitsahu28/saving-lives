const jwt  = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        jwt.verify(req.headers.authorization, 'user_secret_key', (err, decoded) => {
            if (err){
                res.status(401).json({
                    "status": "error",
                    "message": "Unauthorised access."
                });
            }
            else {
                if (decoded.data){
                    req.user = decoded.data;
                    next();
                }
                else{
                    res.status(401).json({
                        "status": "error",
                        "message": "Unauthorised access."
                    });
                }
            }
        });
    } catch(err) {
        console.log("Internal Server Error",err);
        res.status(500).json({
            "status": "error",
            "message": "Internal server error."
        })
    }
}

module.exports = verifyToken;