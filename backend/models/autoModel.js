const mongoose = require('mongoose')

const autoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: [true, 'Por favor escribe un nombre de auto real']
    }
    

},{
    timestamps: true
})


module.exports = mongoose.model('Auto', autoSchema)