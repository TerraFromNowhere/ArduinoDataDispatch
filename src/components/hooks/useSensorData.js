import {useState} from 'react';
import {getDataPerUnitOfTime} from '../dataHandlers/query';
import {getData} from '../dataHandlers/firebase';


export const useToGetSensorData = (queryString) =>{

    let [data,stateData] = useState([]);
    let [dataKeys,keys] = useState([]);
 
    
    getData().ref(queryString).once('value').then(items =>{
        stateData(items.val());
    }).catch(e =>{
       throw new Error(`Error ${e}`);
    });

    dataKeys = keys(Object.keys(data));

   return [data,dataKeys];
}