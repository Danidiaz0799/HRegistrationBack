const { appoimentsModels } = require('../models')

/**
 *Obtener lista de citas
 * @param {*} req
 * @param {*} res
 */
const getAppoiments = async (req, res) => {
    const data = await appoimentsModels.find({});
    res.send({data})
};

/**
 *Obtener cita por Id
 * @param {*} req
 * @param {*} res
 */
const getAppoimentById = (req, res) => {}

/**
 *Insertar cita
 * @param {*} req
 * @param {*} res
 */
const postAppoiment = async (req, res) => {
    const { body } = req;
    console.log(body);
    const data = await appoimentsModels.create(body)
    if (data) {
        res.status(201).json({ message: 'Appoiment created successfully', data });
    } else {
        res.status(500).json({ message: 'Error creating appoiment' });
    }
};

module.exports = { getAppoiments, getAppoimentById, postAppoiment };