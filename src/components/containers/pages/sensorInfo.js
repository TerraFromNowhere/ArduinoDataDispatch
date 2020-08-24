import React , {useState} from 'react';
import {getDataPerDay,getDataPerHour} from '../../dataHandlers/query';
import {Choke} from '../choke';
import {DivButtonContainer,ButtonSensorMode,DivDataContainer,DivDataWrapper} from '../styledContainers/sComponents';
import {getQueryString} from '../../../const/queryConst';




export const SensorInfo = () => {

    let [data,stateData] = useState([]);
    let [fetching,setFetching] = useState(false);

  
return (

        <div>

        <DivButtonContainer> 

            <ButtonSensorMode onClick={()=>{getDataPerHour(stateData,setFetching,getQueryString(1,new Date().getHours()))}}>Get data per last hour</ButtonSensorMode>
            <ButtonSensorMode onClick={()=>{getDataPerDay(stateData,setFetching,getQueryString(1))}}>Get data per last day</ButtonSensorMode>
            <ButtonSensorMode>Switch to real time mode</ButtonSensorMode>
            
        </DivButtonContainer>

        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"5% 0% 10% 0%"}}>
        
        {
 
        data.length > 0 ?
        
                     
        data.map((item,i)=>{



            return <DivDataWrapper key = {i}>
        
                <DivDataContainer> Sensor_id : {item.Sensor_ID}     </DivDataContainer>
                <DivDataContainer> Temperature : {item.Temperature}C</DivDataContainer>
                <DivDataContainer> Humidity : {item.Humidity}%      </DivDataContainer>
                <DivDataContainer> Voltage : {item.Voltage}V        </DivDataContainer>
                <DivDataContainer> Location : {item.Belonging_to}    </DivDataContainer>
                <DivDataContainer> Received at : {item.timeStamp}    </DivDataContainer>

            </DivDataWrapper> 

        
            
            })

        
          
         : 
            <Choke></Choke>

        } 

        </div>

        </div>
    )
}