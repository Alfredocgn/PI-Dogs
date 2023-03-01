import { GET_DOG, GET_DOGS, GET_TEMPERAMENTS, FILTER_BY_CREATED} from "./actions";

const initialState = {
    dogs:[],
    dog:{},
    temperaments:[]

};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_DOGS:
            return{...state,dogs:action.payload}
        case GET_DOG:
            return{...state, dog:action.payload}
        case GET_TEMPERAMENTS:
            return{...state, temperaments:action.payload}
        case FILTER_BY_CREATED:
            const allDogs = state.dogs;
            const filteredStatus = action.payload === "All" ? allDogs : allDogs.filter(el => el.created === action.payload ) 
            return{
                ...state,
                dogs : filteredStatus
            }
        default:
            return{...state};
    }
}

export default rootReducer;