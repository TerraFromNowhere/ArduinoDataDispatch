import React , {useState} from 'react';
import {getData} from '../../dataHandlers/firebase';
import {getDataPerUnitOfTime} from '../../dataHandlers/query';

   
export const Home = () => {

    let [data,stateData] = useState([]);
    let [dataKeys,keys] = useState([]);

    return (

        <div>

        <div style={{display:"flex",justifyContent:"center", width:""}}> <button style ={{width:"",height:"",color:"orange",fontSize:"20px"}} onClick = {()=>{getData().ref("DATA/2020/Month_8/Hour_10/SENSOR_1").once("value").then(items=>{
            getDataPerUnitOfTime(stateData,keys,`DATA/2020/Month_8/Hour_10/SENSOR_1`) 
                    })}}>GET DATA</button>
        <button>GET REAL TIME DATA  (refresh every n second)</button>
        <button onClick={()=>{getDataPerUnitOfTime(stateData,keys,`DATA/2020/Month_8/Hour_10/SENSOR_1`)}}>GET DATA PER HOUR</button>
        <button>GET DATA PER DAY</button>
        <button>GET DATA PER WEEK</button>            
        <button onClick={()=>{console.log(dataKeys)}}>Log my state</button> </div>
        
        {
 
            dataKeys.map((item,i)=>{

                return <div style={{border:" 2px solid red"}} key = {i}>
        
                <div> Sensor_id : {data[item].Sensor_ID}     </div>
                <div> Temperature : {data[item].Temperature}C</div>
                <div> Humidity : {data[item].Humidity}%      </div>
                <div> Voltage : {data[item].Voltage}V        </div>
        
               </div> 
        })
        }

        </div>
    )
}