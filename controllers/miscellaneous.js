const Volunteers = require('../models/volunteers');
const Visitors = require('../models/visitors');

const volunteers = async (req, res) => {
    try {
        let messageSaved = await Volunteers.create(req.body);
        if(messageSaved) {
            // mail to be sent

            res.status(200).json({
                "status": "success",
                "message": "We appreciate your move, thanks for your effort."
            })
        } else {
            res.status(400).json({
                "status": "error",
                "message": "Something went wrong, please try again."
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

const visitors = async (req, res) => {
    try {
        let messageSaved = await Visitors.create(req.body);
        if(messageSaved) {
            // mail to be sent

            res.status(200).json({
                "status": "success",
                "message": "We appreciate your move, thanks for your effort."
            })
        } else {
            res.status(400).json({
                "status": "error",
                "message": "Something went wrong, please try again."
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

module.exports = {
    volunteers,
    visitors
}