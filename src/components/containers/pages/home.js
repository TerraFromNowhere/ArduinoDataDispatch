import React , {useState} from 'react';
import {getDataPerUnitOfTime} from '../../dataHandlers/query';
import {Choke} from '../choke';
import {DivButtonContainer,ButtonSensorMode,DivDataContainer,DivDataWrapper} from '../styledContainers/sComponents';

   
export const Home = () => {

    let [data,stateData] = useState([]);
    let [dataKeys,keys] = useState([]);

    return (

        <div>

        <DivButtonContainer> 

            <ButtonSensorMode onClick={()=>{getDataPerUnitOfTime(stateData,keys,`DATA/2020/Month_8/Hour_10/SENSOR_1`)}}>GET DATA</ButtonSensorMode>
            <ButtonSensorMode>GET REAL TIME DATA  (refresh every n second)</ButtonSensorMode>
            <ButtonSensorMode onClick={()=>{getDataPerUnitOfTime(stateData,keys,`DATA/2020/Month_8/Hour_10/SENSOR_1`)}}>GET DATA PER HOUR</ButtonSensorMode>
            <ButtonSensorMode>GET DATA PER DAY</ButtonSensorMode>
            <ButtonSensorMode>GET DATA PER WEEK</ButtonSensorMode> 

         </DivButtonContainer>
         <div style={{display:"flex",flexDirection:"row",margin:"5% 0% 10% 0%"}}>
        
        {
 
        dataKeys.length > 0 ? dataKeys.map((item,i)=>{

            return <DivDataWrapper key = {i}>
        
                    <DivDataContainer> Sensor_id : {data[item].Sensor_ID}     </DivDataContainer>
                    <DivDataContainer> Temperature : {data[item].Temperature}C</DivDataContainer>
                    <DivDataContainer> Humidity : {data[item].Humidity}%      </DivDataContainer>
                    <DivDataContainer> Voltage : {data[item].Voltage}V        </DivDataContainer>
        
                    </DivDataWrapper> 

            }) : <Choke></Choke>

        } 
        </div>

        </div>
    )
}