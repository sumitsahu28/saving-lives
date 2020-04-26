const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let visitorSchema = new Schema({
    firstName       : { type: String, required: true },
    lastName        : { type: String, required: true },
    email           : { type: String, required: true },
    phone           : { type: Number, required: true },
    message         : { type: String, required: true },
    createdAt       : { type: Date, default: new Date(), select: false },
    updatedAt       : { type: Date, default: new Date(), select: false }
}, { versionKey: false });

let visitors = mongoose.model('visitors', visitorSchema);

module.exports = visitors;