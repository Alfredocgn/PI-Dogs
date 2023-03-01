const {getTemp} = require('../controllers/temperamentsController')

const getTemperamentsHandler = async (req,res)=>{

    
    try {
        const temperament = await getTemp();
        res.status(200).json(temperament)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

}


module.exports = {getTemperamentsHandler};