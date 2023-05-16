const mongoose = require("mongoose");

const DoctorScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    specialties: {
      type: [String],
      enum: ["General medicine", "Cardiology", "Internal Medicine", "Dermatology", "Physical rehabilitation", "Psychology", "Odontology", "Radiology"],
    },
    consultingRoom: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true, // CreateAt, UpdateAt
    versionKey: false,
  }
);

module.exports = mongoose.model("doctors", DoctorScheme);
