import * as types from './actionTypes';
const __SERVER_IP = require('../../configuration').__SERVER_IP;

export const fetchData = () => {

    return {

        type : types.FETCH_DATA,

        payload : (unitOfTime,dispatch,id) =>{
            fetch(`http://${__SERVER_IP}/${unitOfTime}/${id}`)
            .then(result => {
                result.json().then(res => {dispatch(res)});
            })
            .catch(e => {console.log(e)});
        }
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

