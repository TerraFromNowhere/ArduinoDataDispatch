import React from 'react';
import {Sensor_1,Sensor_2,Sensor_3,Sensor_4,Sensor_5,Sensor_6} from './Sensor_1'

export const GeneralTable = () => {
    return (
        
        <div style = {{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
           
            <Sensor_1></Sensor_1>
            <Sensor_2></Sensor_2>
            <Sensor_3></Sensor_3>
            <Sensor_4></Sensor_4>
            <Sensor_5></Sensor_5>
            <Sensor_6></Sensor_6>
            
        </div>
    );
}