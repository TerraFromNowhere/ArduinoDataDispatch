import React , {useState} from 'react';
import {getDataPerDay,getDataPerHour} from '../../dataHandlers/query';
import {DivButtonContainer,ButtonSensorMode,DivDataContainerDetailed,DivDataWrapper,DivDataContainerHeader} from '../styledContainers/sComponents';
import {getQueryString} from '../../../const/queryConst';
import {dataMaxMinFinder} from '../../../const/maxMinFinder';
import {useHistory} from 'react-router-dom';
import {Choke} from '../choke';
import {ResponsiveContainer,Area,CartesianGrid,XAxis,YAxis,AreaChart,Tooltip,ReferenceLine} from 'recharts';
import {DataForm} from '../dataForm';




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
        
        <DataForm></DataForm>

        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"5% 0% 10% 0%"}}>

       
        
        {
            data.length > 0 ? 

            <ResponsiveContainer width="90%" height={500}>

                <AreaChart  data = {data} >
                    <CartesianGrid strokeDasharray = "5 5" color = "lighgray" stroke = "green"/>
                    <XAxis stroke="gold" dataKey="timeStamp"/>
                    <YAxis stroke="gold" />
                    <Tooltip/>
                    <defs>
                        <linearGradient id="split" x1= "0" y1 = "0" x2 = "0" y2 = "1" >
                            <stop stopOpacity={1} stopColor="green" offset = {off}></stop>
                            <stop stopOpacity={1} stopColor="red" offset = {off}></stop>
                        </linearGradient>
                    </defs>
                    <ReferenceLine y={45} label="Critical"  stroke="red" strokeWidth = "5%"/>
                    <Area  type="monotone" dataKey="Temperature" stroke="#8884d8" fill="url(#split)" />
                    <Area type="monotone" dataKey="Humidity" stroke="darkblue" fill="darkblue" />           
                </AreaChart> 

            </ResponsiveContainer>
            :
            <Choke></Choke>
        }

        </div>

        </div>
    )
}