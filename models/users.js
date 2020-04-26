const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name            : { type: String, required: true },
    email           : { type: String, required: true },
    phone           : { type: Number },
    gender          : { type: String },
    dob             : { type: String },
    bloodGroup      : { type: String },
    lastDonated     : { type: String },
    address         : { type: String },
    city            : { type: String },
    state           : { type: String },
    pincode         : { type: Number },
    password        : { type: String },
    createdAt       : { type: Date, default: new Date(), select: false },
    updatedAt       : { type: Date, default: new Date(), select: false }
}, { versionKey: false });

let users = mongoose.model('users', userSchema);

module.exports = users;