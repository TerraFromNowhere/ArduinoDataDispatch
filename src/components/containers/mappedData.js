import React, { useContext,useState } from 'react';
import {DivDataContainer,DivDataWrapper} from './styledContainers/sComponents';


export const MappedData = () => {

    let [data,stateData] = useState([]);
    let [dataKeys,keys] = useState([]);

    dataKeys.map((item,i)=>{

        return <DivDataWrapper key = {i}>
    
                    <DivDataContainer> Sensor_id : {data[item].Sensor_ID}     </DivDataContainer>
                    <DivDataContainer> Temperature : {data[item].Temperature}C</DivDataContainer>
                    <DivDataContainer> Humidity : {data[item].Humidity}%      </DivDataContainer>
                    <DivDataContainer> Voltage : {data[item].Voltage}V        </DivDataContainer>
                    <DivDataContainer> Location : {data[item].Belonging_to}    </DivDataContainer>
                    <DivDataContainer> Received at : {data[item].TimeStamp}    </DivDataContainer>
    
                </DivDataWrapper> 

        });
}