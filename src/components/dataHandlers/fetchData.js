
const __SERVER_IP = require('../../../configuration.js').__SERVER_IP;
const __PORT = require('../../../configuration.js').__PORT;

export const fetchData = (unitOfTime,setSpecialData,id) => {

  
    
    fetch(`http://${__SERVER_IP}:${__PORT}/${unitOfTime}/${id}`,{headers:{
        'Access-Control-Allow-Origin': '*'
    }})
    .then(result => {
        result.json().then(res => {setSpecialData(res)})
    })
    .catch(e => {console.log(e)});
    
}