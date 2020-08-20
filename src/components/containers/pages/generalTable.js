import React from 'react';
import {Sensor_1,Sensor_2,Sensor_3} from './Sensor_1'

export const GeneralTable = () => {
    return (
        <div>
            <h3>Available sensors</h3>
            <Sensor_1></Sensor_1>
            <Sensor_2></Sensor_2>
            <Sensor_3></Sensor_3>
        </div>
    );
}