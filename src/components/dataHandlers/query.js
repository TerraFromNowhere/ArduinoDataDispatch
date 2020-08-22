import {getData} from './firebase.js'


export const getDataPerUnitOfTime = (stateData,setFetching,queryString) =>{
    setFetching(true);
    console.log(queryString);
   return getData().ref().child(queryString).once('value').then(items =>{
        stateData(Object.values(items.val()));
        setFetching(false);
   }).catch(e =>{
        setFetching(false);
       throw new Error(`Error ${e}`);      
   });

}

export const realTimeQueryImitation = (stateData,setFetching,queryString) => {
    console.log("Start to fetching data...");         
        return getData().ref(queryString).limitToLast(1).once('value').then(items =>{
            stateData(Object.values(items.val()));
            console.log("Data fetched from sensor_1");
       }).catch(e =>{
           throw new Error(`Error ${e}`);
       });       
}

