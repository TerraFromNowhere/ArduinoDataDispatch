

const initialState = {
    data : [],
    isFetching:false,
    id : null
};

export const mainReducer = (state = initialState,action) => {
    if(action.type === "GET_DATA"){
        return {
            ...state,
            data : action.payload
        }
    }
    else{
        return {...state};
    }
}