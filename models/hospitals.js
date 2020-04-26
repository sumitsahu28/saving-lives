const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let hospitalSchema = new Schema({
    hospitalId      : { type: String, required: true },
    name            : { type: String, required: true },
    email           : { type: String, required: true },
    phone           : { type: Number },
    address         : { type: String },
    city            : { type: String },
    state           : { type: String },
    pincode         : { type: Number },
    password        : { type: String },
    createdAt       : { type: Date, default: new Date(), select: false },
    updatedAt       : { type: Date, default: new Date(), select: false }
}, { versionKey: false });

let hospitals = mongoose.model('hospitals', hospitalSchema);

module.exports = hospitals;