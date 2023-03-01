const {createDog,getDogbyRaceId,searchDogByName,getAllDogs} = require('../controllers/dogsController');


const getDogsHandler = async (req,res)=>{
    const{name} = req.query;
    try {
        const result = name ? await searchDogByName(name) : await getAllDogs();
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400).json({error : error.message})
        
    }   

}




const getDogByRaceIdHandler = async (req,res) =>{
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api";

    try {
        const dog = await getDogbyRaceId(id,source)
        res.status(200).json(dog);
        
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

}

const createDogHandler = async (req,res) =>{
    const{name,height,weight,lifeSpan,temperaments} = req.body;
    
    try {
        if(!name||!height||!weight||!lifeSpan||!temperaments) throw Error ("Missing data")
        const newDog = await createDog(name,height,weight,lifeSpan,temperaments);
        res.status(201).json(newDog)

        
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }


}

module.exports ={
    getDogsHandler,
    getDogByRaceIdHandler,
    createDogHandler,
}