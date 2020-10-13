
const __SERVER_IP = require('../../../configuration.js').__SERVER_IP;
const __PORT = require('../../../configuration.js').__PORT;

export const fetchData = (unitOfTime,setSpecialData,id) => {

<<<<<<< HEAD
      
    fetch(`http://192.168.0.2:9000/${unitOfTime}/${id}`,{headers:{
=======
  
    
    fetch(`http://${__SERVER_IP}:${__PORT}/${unitOfTime}/${id}`,{headers:{
>>>>>>> b37b2943a48153b582524e63ad8c1ce67d6eccc0
        'Access-Control-Allow-Origin': '*'
    }})
    .then(result => {
        result.json().then(res => {setSpecialData(res)})
    })
    .catch(e => {console.log(e)});
    
}