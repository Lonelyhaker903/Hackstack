const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  studentName: { type: String, required: true },
  hackathonName: { type: String, required: true },
  course: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Certificate", CertificateSchema);
