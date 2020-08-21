import {getData} from './firebase.js'


export const getDataPerUnitOfTime = (stateData,keys,queryString) =>{

   return getData().ref(queryString).once('value').then(items =>{
        stateData(items.val());
        keys(Object.keys(items.val()));
   }).catch(e =>{
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

