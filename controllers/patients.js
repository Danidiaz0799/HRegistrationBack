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
const postPatient = (req, res) => {};

module.exports = {getPatients, getPatientById, postPatient};
