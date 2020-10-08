
import * as action from '../actions/actions';

const initialState = {
    data : [],
    isFetching:false,
    id : null
};

export const mainReducer = (state = initialState,action) => {
    switch(action.type){
        case "FETCH_DATA" :
            return dispatch(action.payload())
        default :
            return {...state}           
    }
}