const mongoose = require("mongoose")

const AppoimentScheme = new mongoose.Schema(
    {
        nameDoctor:{
            type:String,
        },
        lastNameDoctor:{
            type:String,
        },
        specialties:{
            type:["General medicine","Cardiology","Internal Medicine","Dermatology","Physical rehabilitation","Psychology", "Odontology", "Radiology"],
        },
        consultingRoom:{
            type:String,
        },
        email:{
            type:String,
            unique:true,
        },
        namePatient:{
            type:String,
        },
        lastnamePatient:{
            type:String,
        },
        age:{
            type:Number,
        },
        phone:{
            type:Number,
        },
        identification:{
            type:Number,
            unique:true,
        },
    },
    {
        timestamps:true, //CreateAt, UpdateAt
        versionKey: false
    }
);

module.exports = mongoose.model("appoiments", AppoimentScheme)