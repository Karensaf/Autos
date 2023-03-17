const express = require('express')
const router = express.Router()
const {getAutos, setAutos, updateAutos, deleteAutos} = require('../controllers/autoControllers')
const { protect } = require('../middleware/authMiddleware')
router.route('/').get(protect, getAutos).post(protect, setAutos)
router.route('/:id').put(protect, updateAutos).delete(protect, deleteAutos)


// //?Se puede optimizar más de 4 a dos lineas de código
// router.route('/').get(getAutos).post(setAutos)
// router.route('/:id').put(updateAutos).delete(deleteAutos)

module.exports = router