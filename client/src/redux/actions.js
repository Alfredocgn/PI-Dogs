


export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY_CREATED = 'FILTER_BY_CREATED';


export const getDogs = () =>{
    return async function(dispatch) {
        const apiData = await fetch(`http://localhost:3001/dogs`);
        const dogs = await apiData.json();
        dispatch({ type: GET_DOGS, payload:dogs });


    }
}

export const getDog = (id) =>{
    return async function (dispatch){
        const apiData = await fetch(`http://localhost:3001/dogs/${id}`);
        const dog = await apiData.json();
        // console.log(dog)
        dispatch({type: GET_DOG, payload:dog })
    }
}

export const getTemperaments = ()=>{
    return async function (dispatch){
        const apiData =  await fetch(`http://localhost:3001/temperaments`);
        const temperaments = await apiData.json();

        dispatch({type: GET_TEMPERAMENTS ,payload:temperaments });
    }
}

export const filterDogsByCreated = (payload) =>{
    return {
        type: FILTER_BY_CREATED,
        payload
    }
    
}