import * as types from './actionTypes';

export const GET_DATA = () => {

    console.log("GET_DATA triggered");
    
    return {

        type : types.GET_DATA,
        payload : fetchData('day',2)
    }
}

export const getID = (id) => {
    return {
        type: types.GET_SENSOR_ID,
    };
}

export const isFetching = () => {
    return types.IS_FETCHING;
}


const fetchData = (unitOfTime,id,dispatch) => {

    return fetch(`http://192.168.0.2/${unitOfTime}/${id}`)
        .then(result => {
            result.json().then(res => { dispatch(res); });
        })
        .catch(e => { console.log(e)})
    
}