const express = require('express')
const router = express.Router()
const {getAutos, setAutos, updateAutos, deleteAutos} = require('../controllers/autoControllers')

// router.get('/', getAutos)
// router.post('/', setAutos)
// router.put('/:id', updateAutos)
// router.delete('/:id', deleteAutos)

//?Se puede optimizar más de 4 a dos lineas de código
router.route('/').get(getAutos).post(setAutos)
router.route('/:id').put(updateAutos).delete(deleteAutos)

module.exports = router