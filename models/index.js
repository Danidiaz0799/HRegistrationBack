const models = {
    doctorsModels: require('./nosql/doctors'),
    patientsModels: require('./nosql/patients'),
    appointmentsModels: require('./nosql/appointments')
}

module.exports = models;