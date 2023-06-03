const mongoose = require("mongoose")

const appointmentscheme = new mongoose.Schema(
    {        
        identification:{
            type:Number,
            unique:true,
        },
        specialties:{
            type: [String],
            enum: ["General medicine", "Cardiology", "Internal Medicine", "Dermatology", "Physical rehabilitation", "Psychology", "Odontology", "Radiology"],
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'patients' 
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctors' 
        }
    },
    {
        timestamps:true, //CreateAt, UpdateAt
        versionKey: false
    }
);

module.exports = mongoose.model("appointments", appointmentscheme)
