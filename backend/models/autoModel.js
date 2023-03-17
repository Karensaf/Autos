const mongoose = require('mongoose')

const autoSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    marca: {
        type: String,
        required: [true, 'Por favor escribe una marca de auto real']
    },
    modelo: {
        type: String,
        required: [true, 'Por favor escribe un modelo de auto real']
    },
    anio: {
        type: Number,
        required: [true, 'Por favor escribe el año de tu auto']
    },
    color: {
        type: String,
        required: [true, 'Por favor escribe un color']
    }
},{
    timestamps: true
})


module.exports = mongoose.model('Auto', autoSchema)