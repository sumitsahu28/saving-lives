const Users = require('../models/users');
const jwt  = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        let userExists = await Users.findOne({
            "email": req.body.email
        });
        if(userExists) {
            res.status(400).json({
                "status" : "error",
                "message": "User already exists with this email Id."
            })
        } else {
            if(req.body.password && req.body.password == req.body.confirmPassword) {
                delete req.body.confirmPassword;
                let userCreated = await Users.create(req.body);
                if(userCreated) {
                    let userInfo = {};
                    let authToken = await jwt.sign({
                        data: {
                            id: userCreated._id
                        }, exp: Date.now() + (60 * 60 * 1000) }, "user_secret_key");
                    userInfo.authToken = authToken;
                    userInfo.userName = userCreated.name;
                    res.status(200).json({
                        "status"  : "success",
                        "message" : "User registered successfully.",
                        "data"    : userInfo
                    })
                }
            }
            else {
                res.status(400).json({
                    "status" : "error",
                    "message": "Password mismatch."
                })
            }
        }
    } catch (err) {
        console.log("Internal Server Error",err);
        res.status(500).json({
            "status": "error",
            "message": "Internal server error"
        })
    }
}

const login = async (req, res) => {
    try {
        let userExists = await Users.findOne({
            "email": req.body.email
        });

        if(userExists) {
            if(userExists.password == req.body.password)
            {
                let userInfo = {};
                let authToken = await jwt.sign({
                    data: {
                        id: userExists._id
                    }, exp: Date.now() + (60 * 60 * 1000) }, "user_secret_key");
                userInfo.authToken = authToken;
                userInfo.userName = userExists.name;
                res.status(200).json({
                    "status"  : "success",
                    "message" : "User logged In successfully.",
                    "data"    : userInfo
                })
            } else {
                res.status(400).json({
                    "status" : "error",
                    "message": "Invalid password."
                })
            }
        } else {
            res.status(400).json({
                "status" : "error",
                "message": "No user with this email Id exists."
            })
        }
    } catch (err) {
        console.log("Internal Server Error",err);
        res.status(500).json({
            "status": "error",
            "message": "Internal server error"
        })
    }
}

const profile = async (req, res) => {
    try {
        let userData = await Users.findOne({"_id": req.user.id});
        delete userData.password;
        res.status(200).json({
            "status": "success",
            "message": "User profile information.",
            "data" : userData
        })
    } catch (err) {
        console.log("Internal Server Error",err);
        res.status(500).json({
            "status": "error",
            "message": "Internal server error"
        })
    }
}

module.exports = {
    signup,
    login,
    profile
}