const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    collegeName: { type: String, required: true },
    studentId: { type: String, required: true, unique: true }, // Ensure studentId is unique
    branch: { type: String, required: true },
    dob: { type: Date, required: true },
    linkedin: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    otp: { type: String },
    otpExpires: { type: Date },
});

module.exports = mongoose.model('User', userSchema);