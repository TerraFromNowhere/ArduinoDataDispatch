
import {GET_DATA} from '../actions/actions';

const initialState = {
    data : [],
    isFetching:false,
    id : null
};

export const mainReducer = (state = initialState,action) => {

    switch(action.type){
        case GET_DATA :          
            return {
                ...state,
                data:action.payload
            }
        default :
            return {
                ...state
            }           
    }
}