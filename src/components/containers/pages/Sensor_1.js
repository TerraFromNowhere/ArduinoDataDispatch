import React from 'react';
import {DivDataWrapper,DivDataContainer,ButtonSensorMode} from '../styledContainers/sComponents';
import {realTimeQueryImitation} from '../../dataHandlers/query';
import {useState} from 'react'

export const Sensor_1 = () => {

    let [data,stateData] = useState([]);
    let [dataKeys,keys] = useState([]);

    return (

        <DivDataWrapper>

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
            <div>Data not fetched yet</div>

        } 

            <ButtonSensorMode onClick = {
                ()=>{realTimeQueryImitation(stateData,keys,`DATA/Sensor_1/Year_2020/Month_8/Week_34/Day_4/Hour_9`)
                }}>
                    Get RT data
            </ButtonSensorMode>

        </DivDataWrapper>
        
    );
}

export const Sensor_2 = () => {
    return (

        <DivDataWrapper>

            <DivDataContainer></DivDataContainer>
            <DivDataContainer></DivDataContainer>
            <DivDataContainer></DivDataContainer>
            <DivDataContainer></DivDataContainer>
            <DivDataContainer></DivDataContainer>

            <ButtonSensorMode>Get RT data</ButtonSensorMode>

        </DivDataWrapper>
        
    );
}

export const Sensor_3 = () => {
    return (

        <DivDataWrapper>

            <DivDataContainer></DivDataContainer>
            <DivDataContainer></DivDataContainer>
            <DivDataContainer></DivDataContainer>
            <DivDataContainer></DivDataContainer>
            <DivDataContainer></DivDataContainer>

            <ButtonSensorMode>Get RT data</ButtonSensorMode>

        </DivDataWrapper>
        
    );
}