const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    nombre:{
        type:String,
        trim: true
    },
    rol:{
        type:String,
        trim: true
    },
    edad:{
        type:Number,
        trim: true
    },
    cargo:{
        type:String,
        trim: true
    },
    pais:{
        type:String,
        trim: true
    },
    password:{
        type:String,
        trim: true
    }
});

module.exports = mongoose.model('users',UsersSchema)