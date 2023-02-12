const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {YOUR_API_KEY} = process.env;
const axios = require('axios');
const {Dog , Temperament} = require('../db');
const {createDogHandler,getDogsHandler,getDogByRaceIdHandler} = require('../handlers/dogsHandlers')
const{getTemperamentsHandler} = require('../handlers/temperamentsHandlers')

// const dogsRouter = require('./dogsRouter');
// const temperamentRouter = require('./temperamentRouter')




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/dogs',dogsRouter);
// router.use('/temperaments',temperamentRouter)


router.get('/dogs',getDogsHandler)
router.get('/dogs/:id', getDogByRaceIdHandler)
router.post('/dogs', createDogHandler)


router.get('/temperaments',getTemperamentsHandler)

module.exports = router;
