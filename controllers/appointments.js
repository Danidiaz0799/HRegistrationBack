const { doctorsModels, patientsModels, appointmentsModels } = require('../models');

/**
 * Obtener lista de citas
 * @param {*} req
 * @param {*} res
 */
const getappointments = async (req, res) => {
  try {
    const appointments = await appointmentsModels.find({})
      .populate('patient', '_id name lastname identification')
      .populate('doctor', '_id name lastName specialties consultingRoom');

    const formattedAppointments = appointments.map((appointment) => {
      const { identification, specialties, patient, doctor, _id, createdAt, updatedAt } = appointment;

      return {
        identification,
        specialties,
        patient: {
          _id: patient._id,
          name: patient.name,
          lastname: patient.lastname,
          identification: patient.identification,
        },
        doctor: {
          _id: doctor._id,
          name: doctor.name,
          lastName: doctor.lastName,
          specialties: doctor.specialties,
          consultingRoom: doctor.consultingRoom,
        },
        _id,
        createdAt,
        updatedAt,
      };
    });

    res.json({ message: 'Appointments retrieved successfully', data: formattedAppointments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving appointments' });
  }
};

module.exports = {
  getappointments,
};


module.exports = {
  getappointments,
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

  try {
    const specialty = body.specialty;
    const doctor = await doctorsModels.findOne({ specialties: { $in: [specialty] } });

    if (!doctor) {
      return res.status(404).json({ message: 'No doctor found for the specified specialty' });
    }

    const identification = body.identification;
    const patient = await patientsModels.findOne({ identification });

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const appointmentData = {
      identification: patient.identification,
      specialties: doctor.specialties,
      doctor: doctor,
      patient: patient
    };

    const data = await appointmentsModels.create(appointmentData);

    if (data) {
      res.status(201).json({ message: 'Appointment created successfully', data });
    } else {
      res.status(500).json({ message: 'Error creating Appointment' });
    }
  } catch (error) {
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
