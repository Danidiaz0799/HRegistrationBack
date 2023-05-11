const { doctorsModels } = require('../models')

/**
 *Obtener lista de doctores
 * @param {*} req
 * @param {*} res
 */
const getDoctors = async (req, res) => {
    const data = await doctorsModels.find({});
    res.send({data})
};

/**
 *Obtener doctor por Id
 * @param {*} req
 * @param {*} res
 */
const getDoctorById = (req, res) => {}

/**
 *Insertar doctor
 * @param {*} req
 * @param {*} res
 */
const postDoctor = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await doctorsModels.create(body)
    if (data) {
        res.status(201).json({ message: 'Doctor created successfully', data });
    } else {
        res.status(500).json({ message: 'Error creating doctor' });
    }
};

module.exports = { getDoctors, getDoctorById, postDoctor };