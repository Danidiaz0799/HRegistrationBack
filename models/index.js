const models = {
    doctorsModels: require('./nosql/doctors'),
    patientsModels: require('./nosql/patients'),
    appoimentsModels: require('./nosql/appoiments')
}

module.exports = models;