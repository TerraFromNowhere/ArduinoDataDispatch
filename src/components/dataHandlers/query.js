import {getData} from './firebase.js'


export const getDataPerUnitOfTime = (stateData,keys,queryString = String) =>{

   return getData().ref(queryString).once('value').then(items =>{
        stateData(items.val());
        keys(Object.keys(items.val()));
   }).catch(e =>{
       throw new Error(`Error ${e}`);
   });

}

export const realTimeQueryImitation = (stateData,keys,queryString = String) => {
    console.log("Start to fetching data..."); 
   return  setInterval(()=>{

        console.log("Start to fetching data..."); 

        return getData().ref(queryString).limitToLast(1).once('value').then(items =>{
            stateData(items.val());
            keys(Object.keys(items.val()));
       }).catch(e =>{
           throw new Error(`Error ${e}`);
       });

       console.log("Data fetched from sensor_1");

    },60000);

    let stop = clearInterval(timer);
}

