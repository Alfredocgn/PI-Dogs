const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {createDogHandler,getDogsHandler,getDogByRaceIdHandler} = require('../handlers/dogsHandlers')
const{getTemperamentsHandler} = require('../handlers/temperamentsHandlers')

// const dogsRouter = require('./dogsRouter');
// const temperamentRouter = require('./temperamentRouter')




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/dogs',dogsRouter);
// router.use('/temperaments',temperamentRouter)

//DOGS ROUTES
router.get('/dogs',getDogsHandler)
router.get('/dogs/:id', getDogByRaceIdHandler)
router.post('/dogs', createDogHandler)


//TEMPERAMENT ROUTES 
router.get('/temperaments',getTemperamentsHandler)

module.exports = router;
