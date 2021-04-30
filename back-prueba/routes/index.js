const express = require('express')

const router = express.Router();

const usersController = require('../controllers/usersSchemaController')

module.exports = function(){
    // trae todo
    router.get('/users', usersController.list);
    // agrega usuario
    router.post('/addUser',usersController.add);
    // login
    router.post('/login',usersController.login);
    //mostrar usuario
    router.post('/show',usersController.show);
    //actualizar usuario
    router.post('/update', usersController.update);
    return router;

}