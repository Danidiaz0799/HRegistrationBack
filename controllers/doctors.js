const { doctorsModels } = require('../models')

/**
 *Obtener lista de doctores
 * @param {*} req
 * @param {*} res
 */

const getDoctors = async (req, res) => {
    const data = await doctorsModels.find({});
    res.send({data})
};

/**
 *Obtener doctor por Id
 * @param {*} req
 * @param {*} res
 */
const getDoctorById = (req, res) => {}

/**
 *Insertar doctor
 * @param {*} req
 * @param {*} res
 */
const postDoctors = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await doctorsModels.create(body)
    res.send({data})
}

module.exports = { getDoctors, getDoctorById, postDoctors };