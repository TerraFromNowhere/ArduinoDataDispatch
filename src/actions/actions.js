import * as types from './actionTypes';
const __SERVER_IP = require('../../configuration').__SERVER_IP;

export const GET_DATA = (unitOfTime,id) => dispatch => {

    console.log("GET_DATA triggered");
    
    return {

        type : types.GET_DATA,
        payload : 'DATA'
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


const fetchData = () => {

    return fetch(`http://192.168.0.2/${unitOfTime}/${id}`)
        .then(result => {
            result.json().then(res => { dispatch(res); });
        })
        .catch(e => { console.log(e)})
    
}