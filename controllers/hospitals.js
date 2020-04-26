const Hospitals = require('../models/hospitals');
const jwt  = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        let hospitalExists = await Hospitals.findOne({
            "email": req.body.email, "hospitalId": req.body.hospitalId
        });
        if(hospitalExists) {
            res.status(400).json({
                "status" : "error",
                "message": "This hospital already exists with this credentials."
            })
        } else {
            if(req.body.password && req.body.password == req.body.confirmPassword) {
                delete req.body.confirmPassword;
                let hospitalRegistered = await Hospitals.create(req.body);
                if(hospitalRegistered) {
                    let hospitalInfo = {};
                    let authToken = await jwt.sign({
                        data: {
                            id: hospitalRegistered._id
                        }, exp: Date.now() + (60 * 60 * 1000) }, "hospital_secret_key");
                    hospitalInfo.authToken = authToken;
                    hospitalInfo.userName = hospitalRegistered.name;
                    res.status(200).json({
                        "status"  : "success",
                        "message" : "Hospital registered successfully.",
                        "data"    : hospitalInfo
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
        let hospitalExists = await Hospitals.findOne({
            "email": req.body.email
        });

        if(hospitalExists) {
            if(hospitalExists.password == req.body.password)
            {
                let hospitalInfo = {};
                let authToken = await jwt.sign({
                    data: {
                        id: hospitalExists._id
                    }, exp: Date.now() + (60 * 60 * 1000) }, "user_secret_key");
                hospitalInfo.authToken = authToken;
                hospitalInfo.hospitalName = hospitalExists.name;
                res.status(200).json({
                    "status"  : "success",
                    "message" : "Hospital logged In successfully.",
                    "data"    : hospitalInfo
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
                "message": "No hospital with this email Id exists."
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
        let hospitalData = await Hospitals.findOne({"_id": req.hospital.id});
        delete hospitalData.password;
        res.status(200).json({
            "status": "success",
            "message": "Hospital profile information.",
            "data" : hospitalData
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