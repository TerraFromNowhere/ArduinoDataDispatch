import React, { useState } from 'react';
import {DivDataContainer,DivDataWrapper} from './styledContainers/sComponents';


export const MappedData = () => {

    let [data,stateData] = useState([]);
    let [dataKeys,keys] = useState([]);

    dataKeys.map((item,i)=>{

        return <DivDataWrapper key = {i}>
    
                    <DivDataContainer> Номер сенсора : {data[item].Sensor_ID}     </DivDataContainer>
                    <DivDataContainer> Температура : {data[item].Temperature}C</DivDataContainer>
                    <DivDataContainer> Влажность : {data[item].Humidity}%      </DivDataContainer>
                    <DivDataContainer> Вольтаж : {data[item].Voltage}V        </DivDataContainer>
                    <DivDataContainer> Локация : {data[item].Belonging_to}    </DivDataContainer>
                    <DivDataContainer> Получено в : {data[item].TimeStamp}    </DivDataContainer>
    
                </DivDataWrapper> 

        });
}