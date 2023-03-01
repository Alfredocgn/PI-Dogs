const {Temperament} = require('../db');
const axios = require('axios')
const {YOUR_API_KEY} = process.env;

const getTemp = async () =>{    
const getTemperamentsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data

const getTemperaments = getTemperamentsRaw.map(el => el.temperament)



const finalTemperaments = getTemperaments.reduce((prev,actual)=>{
    if(actual){
    actual.split(',').forEach(el => prev.push(el.trim()))}
    return prev
},[])



const cleanTemperaments = new Set(finalTemperaments);

const resultTemperaments = [...cleanTemperaments].map((temperament)=>({
    name: temperament,
}))


const temperaments = await Temperament.bulkCreate(resultTemperaments,{
    returning:true,
})
return temperaments;
}

module.exports ={getTemp};