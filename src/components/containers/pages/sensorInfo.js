import React , {useState} from 'react';
import {getDataPerUnitOfTime} from '../../dataHandlers/query';
import {Choke} from '../choke';
import {DivButtonContainer,ButtonSensorMode,DivDataContainer,DivDataWrapper} from '../styledContainers/sComponents';





export const SensorInfo = () => {

    let [data,stateData] = useState([]);
    let [dataKeys,keys] = useState([]);

  
return (

        <div>

        <DivButtonContainer> 

            <ButtonSensorMode onClick={()=>{getDataPerUnitOfTime(stateData,keys,`DATA/Sensor_1/Year_2020/Month_8/Week_34/Day_4/Hour_9`)}}>GET DATA</ButtonSensorMode>
            <ButtonSensorMode>GET REAL TIME DATA  (refresh every n second)</ButtonSensorMode>
            <ButtonSensorMode onClick={()=>{getDataPerUnitOfTime(stateData,keys,`DATA/Sensor_1/Year_2020/Month_8/Week_34/Day_4/Hour_9`)}}>GET DATA PER HOUR</ButtonSensorMode>
            <ButtonSensorMode>GET DATA PER DAY</ButtonSensorMode>
            <ButtonSensorMode>GET DATA PER WEEK</ButtonSensorMode> 

        </DivButtonContainer>

        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"5% 0% 10% 0%"}}>
        
        {
 
        dataKeys.length > 0 ? 

      
        dataKeys.map((item,i)=>{

            return <DivDataWrapper key = {i}>
        
                        <DivDataContainer> Sensor_id : {data[item].Sensor_ID}     </DivDataContainer>
                        <DivDataContainer> Temperature : {data[item].Temperature}C</DivDataContainer>
                        <DivDataContainer> Humidity : {data[item].Humidity}%      </DivDataContainer>
                        <DivDataContainer> Voltage : {data[item].Voltage}V        </DivDataContainer>
                        <DivDataContainer> Location : {data[item].Belonging_to}    </DivDataContainer>
                        <DivDataContainer> Received at : {data[item].timeStamp}    </DivDataContainer>
        
                    </DivDataWrapper> 
    
            })
          
         : 
            <Choke></Choke>

        } 

        </div>

        </div>
    )
}