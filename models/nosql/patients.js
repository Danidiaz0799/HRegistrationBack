const mongoose = require("mongoose")

const PatientScheme = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        lastname:{
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
        versionKey:false
    }
);

module.exports = mongoose.model("patients", PatientScheme)