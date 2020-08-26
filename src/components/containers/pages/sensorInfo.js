import React , {useState} from 'react';
import {getDataPerDay,getDataPerHour} from '../../dataHandlers/query';
import {Choke} from '../choke';
import {DivButtonContainer,ButtonSensorMode,DivDataContainerDetailed,DivDataWrapper,DivDataContainerHeader} from '../styledContainers/sComponents';
import {getQueryString} from '../../../const/queryConst';
import {dataMaxMinFinder} from '../../../const/maxMinFinder';
import {useHistory} from 'react-router-dom';
import {Area,CartesianGrid,XAxis,YAxis,AreaChart,Tooltip} from 'recharts';




export const SensorInfo = () => {

    let [data,stateData] = useState([]);
    let [fetching,setFetching] = useState(false);

    const LocalHistory = useHistory();
    const off = dataMaxMinFinder(data) || null;

  
return (

        <div>

        <DivButtonContainer> 

            <ButtonSensorMode onClick={()=>{getDataPerHour(stateData,setFetching,getQueryString(1,new Date().getHours()))}}>Get data per last hour</ButtonSensorMode>
            <ButtonSensorMode onClick={()=>{getDataPerDay(stateData,setFetching,getQueryString(1))}}>Get data per last day</ButtonSensorMode>
            <ButtonSensorMode onClick = {()=>{LocalHistory.push('/')}}>Switch to real time mode</ButtonSensorMode>
            
        </DivButtonContainer>

        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"5% 0% 10% 0%"}}>

  
        
        
        {
            data.length > 0 ? 

            <AreaChart margin={{top:5,right:5,bottom:5,left:5}} width={900} height = {400} data = {data} >
                <CartesianGrid strokeDasharray = "5 5" color = "lighgray" stroke = "green"/>
                <XAxis stroke="gold" dataKey="timeStamp"/>
                <YAxis stroke="gold" />
                <Tooltip/>
                <defs>
                    <linearGradient id="split" x1= "0" y1 = "0" x2 = "0" y2 = "1" >
                        <stop stopOpacity={1} stopColor="green" offset = "0%"></stop>
                        <stop stopOpacity={1} stopColor="red" offset = "100%"></stop>
                    </linearGradient>
                </defs>
                <Area  type="monotone" dataKey="Temperature" stroke="#8884d8" fill="url(#split)" />
                <Area type="monotone" dataKey="Humidity" stroke="black" fill="darkblue" />           
            </AreaChart> 
            :
            <span></span>
        }
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