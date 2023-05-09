const { patientsModels } = require("../models");


/**
 * Obtener lista de pacientes
 * @param {*} req 
 * @param {*} res 
 */
const getPatients = async (req, res) => {
    const data = await patientsModels.find({});
    res.send({data});
};

/**
 * Obtener paciente por id
 * @param {*} req 
 * @param {*} res 
 */
const getPatientById = (req, res) => {};

/**
 * Crear un paciente
 * @param {*} req 
 * @param {*} res 
 */
const postPatient = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await patientsModels.create(body)
    res.send({data})
};

module.exports = {getPatients, getPatientById, postPatient};
