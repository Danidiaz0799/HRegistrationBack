const { doctorsModels, patientsModels, appointmentsModels } = require('../models');

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

  // Obtener los datos del doctor por especialidad
  const { specialty } = body;
  try {
    const doctor = await doctorsModels.findOne({ specialties: { $in: [specialty] } });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found for the specified specialty' });
    }

    // Obtener los datos del paciente por identificación
    const { identification } = body;
    const patient = await patientsModels.findOne({ identification });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Combinar los datos del doctor, paciente y los datos de la cita en un nuevo objeto
    const appointmentData = {
      doctor,
      patient,
      ...body,
    };

    // Crear la nueva cita
    const data = await appointmentsModels.create(appointmentData);
    res.status(201).json({ message: 'Appointment created successfully', data });
  } catch (error) {
    res.status(500).json({ message: 'Error creating appointment' });
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
