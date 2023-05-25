const { patientsModels } = require("../models");

/**
 * Obtener lista de pacientes
 * @param {*} req
 * @param {*} res
 */
const getPatients = async (req, res) => {
    const data = await patientsModels.find({});
    res.send(data);
};

/**
 * Obtener paciente por id
 * @param {*} req
 * @param {*} res
 */
const getPatientById = async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await patientsModels.findOne({ identification: id });
        if (patient) {
            res.status(200).json({ data: patient });
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving patient' });
    }
};

/**
 * Crear un paciente
 * @param {*} req
 * @param {*} res
 */
const postPatient = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await patientsModels.create(body)
    if (data) {
        res.status(201).json({ message: 'Patient created successfully', data });
    } else {
        res.status(500).json({ message: 'Error creating patient' });
    }
};

/**
 * Actualizar paciente
 * @param {*} req
 * @param {*} res
 */
const putPatient = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const patient = await patientsModels.findByIdAndUpdate(id, body, { new: true });
        if (patient) {
            res.status(200).json({ message: 'Patient updated successfully', data: patient });
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating patient' });
    }
};

/**
 * Eliminar paciente
 * @param {*} req
 * @param {*} res
 */
const deletePatient = async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await patientsModels.findByIdAndDelete(id);
        if (patient) {
            res.status(200).json({ message: 'Patient deleted successfully' });
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting patient' });
    }
};

module.exports = { getPatients, getPatientById, postPatient, putPatient, deletePatient };