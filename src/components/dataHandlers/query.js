import {getData} from './firebase.js'


export const getDataPerUnitOfTime = (stateData,keys,queryString = String) =>{

   return getData().ref(queryString).once('value').then(items =>{
        stateData(items.val());
        keys(Object.keys(items.val()));
   }).catch(e =>{
       throw new Error(`Error ${e}`)
   });

}

