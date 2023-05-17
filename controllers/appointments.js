const { appointmentsModels } = require('../models')

/**
 *Obtener lista de citas
 * @param {*} req
 * @param {*} res
 */
const getappointments = async (req, res) => {
    const data = await appointmentsModels.find({});
    res.send(data)
};

/**
 * Obtener cita por ID
 * @param {*} req
 * @param {*} res
 */
const getAppoimentById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await appointmentsModels.findOne({ identification: id });
      if (data) {
        res.status(200).json({ data });
      } else {
        res.status(404).json({ message: 'Appointment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving appointment' });
    }
  };

/**
 *Insertar cita
 * @param {*} req
 * @param {*} res
 */
const postAppoiment = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await appointmentsModels.create(body)
    if (data) {
        res.status(201).json({ message: 'Appoiment created successfully', data });
    } else {
        res.status(500).json({ message: 'Error creating appoiment' });
    }
};

module.exports = { getappointments, getAppoimentById, postAppoiment };