const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let volunteerSchema = new Schema({
    name            : { type: String, required: true },
    email           : { type: String, required: true },
    message         : { type: String, required: true },
    createdAt       : { type: Date, default: new Date(), select: false },
    updatedAt       : { type: Date, default: new Date(), select: false }
}, { versionKey: false });

let volunteers = mongoose.model('volunteers', volunteerSchema);

module.exports = volunteers;