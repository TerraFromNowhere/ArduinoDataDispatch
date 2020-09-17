
const __SERVER_IP = require('../../../configuration.js').__SERVER_IP;

export const fetchData = (unitOfTime,setSpecialData,id) => {
    
    fetch(`http://${__SERVER_IP}/${unitOfTime}/${id}`)
    .then(result => {
        result.json().then(res => {setSpecialData(res)})
    })
    .catch(e => {console.log(e)});    
}