const jwt  = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        // console.log(req.headers)
        jwt.verify(req.headers.authorization, 'hospital_secret_key', (err, decoded) => {
            if (err){
                console.log(err);
                res.status(401).json({
                    "status": "error",
                    "message": "Unauthorised access."
                });
            }
            else {
                if (decoded.data){
                    req.hospital = decoded.data;
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