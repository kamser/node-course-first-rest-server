//Aqui lo que va son funciones que se exportan y se usan como callbacks en las routes,
//estas funciones tienen la logica de negocio
const {response} = require('express');

const usersGet = (req, res = response) => {
    //res.send('Hello World');
    res.json({
        msg: 'Get from the API - Controller'
    });
}

//Para ejemplo de extraccion de multiples variables opcionales (son las que vienen despues del
//signo ? en el url). la forma de extraerlos es por medio de req, pero en lugar de params, se usa 
//el atributo query que es donde vendrian todos los parametros que se decidan enviar de forma opcional
//por el url
const usersGetMultipleQuery = (req, res = response) => {
    const query = req.query;

    res.json({
        msg: 'Get from the API - Controller',
        query
    });
}


const usersPost = (req, res = response) => {
    //De esta forma es como se extrae informacion de lo que venga en una peticion post
    const body = req.body;
    //res.send('Hello World');
    res.json({
        msg: 'Post from the API - Controller',
        body,
    });
}

//Para extraer los parametros que se traen de la url, lo que se hace es
//algo parecido con lo del post, pero en lugar del body, lo que se va a 
//extraer del req es el atributo params
const usersPut = (req, res = response) => {
    const {id} = req.params; //El nombre id es el mismo que se puso en el url de las rutas. DEBE ser el mismo
    res.json({
        msg: 'Put from the API - Controller'
    });
}

const usersDelete = (req, res = response) => {
    //res.send('Hello World');
    res.json({
        msg: 'Delete from the API - Controller'
    });
}




module.exports = {
    usersGet,
    usersPut,
    usersDelete,
    usersPost,
    usersGetMultipleQuery
}

