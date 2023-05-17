const { doctorsModels } = require('../models')

/**
 *Obtener lista de doctores
 * @param {*} req
 * @param {*} res
 */
const getDoctors = async (req, res) => {
    const data = await doctorsModels.find({});
    res.send(data)
};

/**
 * Obtener doctores por especialidad
 * @param {*} req
 * @param {*} res
 */
const getDoctorsBySpecialty = async (req, res) => {
    const { specialty } = req.params;
    try {
      const doctors = await doctorsModels.find({ specialties: { $in: [specialty] } });
      if (doctors.length > 0) {
        res.status(200).json({ data: doctors });
      } else {
        res.status(404).json({ message: 'No doctors found for the specified specialty' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving doctors' });
    }
  };

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

module.exports = { getDoctors, getDoctorsBySpecialty, postDoctor };