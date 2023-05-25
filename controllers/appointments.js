const { appointmentsModels } = require('../models')

/**
 * Obtener lista de citas
 * @param {*} req
 * @param {*} res
 */
const getappointments = async (req, res) => {
    const data = await appointmentsModels.find({});
    res.send(data)
};

/**
 * Obtener cita por id
 * @param {*} req
 * @param {*} res
 */
const getAppointmentById = async (req, res) => {
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
 * Crear una cita
 * @param {*} req
 * @param {*} res
 */
const postAppointment = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await appointmentsModels.create(body)
    if (data) {
        res.status(201).json({ message: 'Appointment created successfully', data });
    } else {
        res.status(500).json({ message: 'Error creating Appointment' });
    }
};

/**
 * Actualizar cita
 * @param {*} req
 * @param {*} res
 */
const putAppointment = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
      const appointment = await appointmentsModels.findByIdAndUpdate(id, body, { new: true });
      if (appointment) {
          res.status(200).json({ message: 'Appointment updated successfully', data: appointment });
      } else {
          res.status(404).json({ message: 'Appointment not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Error updating Appointment' });
  }
};

/**
* Eliminar cita
* @param {*} req
* @param {*} res
*/
const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
      const appointment = await appointmentsModels.findByIdAndDelete(id);
      if (appointment) {
          res.status(200).json({ message: 'Appointment deleted successfully' });
      } else {
          res.status(404).json({ message: 'Appointment not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Error deleting Appointment' });
  }
};

module.exports = { getappointments, getAppointmentById, postAppointment, putAppointment, deleteAppointment };