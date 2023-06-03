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
            ref: 'patients' // Reemplaza 'patients' con el nombre del modelo de pacientes
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctors' // Reemplaza 'doctors' con el nombre del modelo de doctores
        }
    },
    {
        timestamps:true, //CreateAt, UpdateAt
        versionKey: false
    }
);

module.exports = mongoose.model("appointments", appointmentscheme)
