import React , {useState} from 'react';
import {getDataPerDay,getDataPerHour} from '../../dataHandlers/query';
import {Choke} from '../choke';
import {DivButtonContainer,ButtonSensorMode,DivDataContainerDetailed,DivDataWrapper,DivDataContainerHeader} from '../styledContainers/sComponents';
import {getQueryString} from '../../../const/queryConst';
import {useHistory} from 'react-router-dom';
import {LineChart,Line,CartesianGrid,XAxis,YAxis} from 'recharts';




export const SensorInfo = () => {

    const LocalHistory = useHistory();

    let [data,stateData] = useState([]);
    let [fetching,setFetching] = useState(false);

  
return (

        <div>

        <DivButtonContainer> 

            <ButtonSensorMode onClick={()=>{getDataPerHour(stateData,setFetching,getQueryString(1,new Date().getHours()))}}>Get data per last hour</ButtonSensorMode>
            <ButtonSensorMode onClick={()=>{getDataPerDay(stateData,setFetching,getQueryString(1))}}>Get data per last day</ButtonSensorMode>
            <ButtonSensorMode onClick = {()=>{LocalHistory.push('/')}}>Switch to real time mode</ButtonSensorMode>
            
        </DivButtonContainer>

        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"5% 0% 10% 0%"}}>

        <LineChart width={900} height = {400} data = {data}>
            <Line type = "monotone" dataKey = "Temperature" stroke="black"/>
                <CartesianGrid color = "lighgray" stroke = "orange"/>
                <XAxis dataKey="timeStamp"/>
                <YAxis dataKey = "Temperature"/>           
        </LineChart>   
        
        {
 
        data.length > 0 ?
        
                     
        data.map((item,i)=>{



            return <DivDataWrapper key = {i}>
        
                <DivDataContainerHeader> Sensor_id : {item.Sensor_ID}     </DivDataContainerHeader>
                <DivDataContainerHeader> Location : {item.Belonging_to}</DivDataContainerHeader>
                <DivDataContainerDetailed> Humidity : {item.Humidity}%      </DivDataContainerDetailed>
                <DivDataContainerDetailed> Voltage : {item.Voltage}V        </DivDataContainerDetailed>
                <DivDataContainerDetailed> Temperature : {item.Temperature}C     </DivDataContainerDetailed>
                <DivDataContainerDetailed> Received at : {item.timeStamp}    </DivDataContainerDetailed>

                </DivDataWrapper> 

        
            
            })

        
          
         : 
            <Choke></Choke>

        }


        </div>

        </div>
    )
}