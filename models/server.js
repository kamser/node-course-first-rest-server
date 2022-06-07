const express = require('express');
const cors = require('cors')
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.middelwares();
        this.routes();
    }

    middelwares(){
        //todo lo que vaya dentro del metodo use es un middleware;
        this.app.use(cors());

        //Para leer informacion que le llega al server en forma de json desde el cliente
        //atraves de peticiones post put o delete
        //Serializa la informacion que viene el el body.
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes(){
        //El primer parametro va a ser el path para los apis:
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port);
    }
}


module.exports = Server;