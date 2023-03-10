const asyncHandler = require('express-async-handler')
const Auto = require('../models/autoModel')

const getAutos = asyncHandler(async(req,res) => {

    const autos = await Auto.find()

    res.status(200).json(autos)
})

const setAutos = asyncHandler(async(req,res) => {

    if(!req.body.nombre){     //? TEXTO es el nombre del campo
        //res.status(400).json({mensaje: 'Favor de teclear la descripcion de la tarea '})
        res.status(400)
        throw new Error('Favor de teclear nombre del auto ')
    }

    const auto = await Auto.create({
        nombre: req.body.nombre
    })

    res.status(201).json({mensaje:'Escribre un nombre de auto descente'})
})

const updateAutos = asyncHandler(async(req,res) => {

    const auto = await Auto.findById(req.params.id)

    if (!auto) {
        res.status(400)
        throw new Error('Auto no encontrado')
    }

    const autoModificado = await Auto.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(autoModificado)
})

const deleteAutos = asyncHandler(async(req,res) => {

    const auto = await Auto.findById(req.params.id)

    if(!auto) {
        res.status(400)
        throw new Error ('Auto no encontrado')
    }

    // await tarea.remove    //? Esta solo la borra si existe

     const autoBorrado = await Auto.findByIdAndDelete(req.params.id)  //? Es correcta pero ya no tiene caso q ponga cual va a borrar


    res.status(200).json({id: req.params.id})
})



module.exports = {
    getAutos,
    setAutos,
    updateAutos,
    deleteAutos
}