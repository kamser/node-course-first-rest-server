const {Router} = require('express');
const { usersGet, usersPut, usersPost, usersDelete, usersGetMultipleQuery } = require('../controller/user');

const router = Router();

//Para las rutas aqui los paths se dejan a lo mas basico, ya que
// en el metodo routes del servidor se define el path para acceder a
//estos endpoints
router.get('/', usersGet); //No se ejecuta la funcion, se esta enviando la referencia de esta para que se ejecute cuando se le requiera y no cuando se inicia el servidor

//En este caso, este ejemplo es para cuando se hace una peticion con multiples parametros, pero todos opcionales
//Para este caso, no se debe modificar la url como se hizo con el put, ya que estos parametros pueden o no venir.
//La logica donde se extraen estos parametros está en el controlador.
//ejemplo de la url: http://localhost:8080/api/users/multiple?key=344&name=keylor&age=27
router.get('/multiple', usersGetMultipleQuery);

//Primer parametro es el pad para el api y el segundo es el controlador
//Para el metodo put, que normalmente trae parametros en la url, para extraerle esos parametros
//lo que se hace es poner: :nombreParametro en el url que llama al put, por ejemplo el de abajo
//express va a reconocer como parametro los que vayan depues de los dos puntos despues del slash.
//Para extraer los parametros, eso se hace en el controlador, ir al controller.
router.put('/:id', usersPut );

router.post('/', usersPost);

router.delete('/', usersDelete);

module.exports = router;