const {Dog,Temperament} = require('../db');
const axios = require('axios');
const db = require('../db');
const {YOUR_API_KEY} = process.env;



const cleanDogsApi =  (arr) =>{
    return arr.map((el) => {
        return {
            id: el.id,
            name:el.name,
            height:el.height.metric,
            weight: el.weight.metric,
            lifeSpan:el.life_span,
            img: el.image,
            created: false,
            temp: el.temperament

        }
    })
    
}


const createDog = async (name,height,weight,lifeSpan,temperaments) =>{
    const newDog = await Dog.create({name,height,weight,lifeSpan,temperaments})
    // return newDog;

    const filteredDog = await newDog.addTemperament(temperaments)

    return filteredDog


}

const getDogbyRaceId = async (id,source)=>{
    if(source === 'api'){
        const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${YOUR_API_KEY}`)).data;

        return apiDogsRaw
    }else{
        return await Dog.findByPk(id,{
            include:{
                model:Temperament
            }
        })
        

    }

}


const getAllDogs = async () =>{
    const dbDogs = await Dog.findAll();
    const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data;


    const apiDogs = cleanDogsApi(apiDogsRaw)



    const results = [...dbDogs,...apiDogs];
    if(results.length === 0){
        throw new Error ("El perro buscado no existe")
    }

    return results
}

const searchDogByName = async (name) => {
    const dbDogs = await Dog.findAll({
        where:{
            name:name
        }
    })

    const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data;
const apiDogs = cleanDogsApi(apiDogsRaw)


    const filteredDogs = apiDogs.filter(dog => dog.name === name)
    result = [...filteredDogs,...dbDogs]
    if(result.length === 0){
        throw new Error ("El perro buscado no existe")
    }

    return[...filteredDogs,...dbDogs]



}


module.exports = {createDog, getDogbyRaceId,getAllDogs,searchDogByName}    