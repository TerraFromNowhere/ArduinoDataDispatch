import React , {useState} from 'react';
import {getDataPerDay,getDataPerHour} from '../../dataHandlers/query';
import {SpanChartHeader,SpanHeaders,StyledForm,DivButtonContainer,ButtonSensorMode,StyledInput} from '../styledContainers/sComponents';
import {getQueryString} from '../../../const/queryConst';
import {dataMaxMinFinder} from '../../../const/maxMinFinder';
import {useHistory} from 'react-router-dom';
import {Choke} from '../choke';
import {ResponsiveContainer,Label,Area,CartesianGrid,XAxis,YAxis,AreaChart,Tooltip,ReferenceLine} from 'recharts';
import {submitValidator,keyNullifier} from '../../dataHandlers/submitValidator';


export const SensorInfo = () => {

    let [data,stateData] = useState([]);
    let [fetching,setFetching] = useState(false);
    let [seNumber,setSeNumber] = useState([]);

    const LocalHistory = useHistory();
    const off = dataMaxMinFinder(data) || null;

  
return (

        <div>
        
            <StyledForm>       
                <StyledInput onKeyPress = {(eve)=>{keyNullifier(eve)}} onChange={(eve)=>{submitValidator(eve,setSeNumber)}} placeholder = "Set sensor id (1-3)" className="inp" type="text"></StyledInput>
            </StyledForm>

        

                <DivButtonContainer> 

                    <ButtonSensorMode onClick={()=>{getDataPerHour(stateData,setFetching,getQueryString(seNumber||1,new Date().getHours()))}}>Get data per last hour</ButtonSensorMode>
                    <ButtonSensorMode onClick={()=>{getDataPerDay(stateData,setFetching,getQueryString(seNumber||1))}}>Get data per last day</ButtonSensorMode>
                    <ButtonSensorMode onClick = {()=>{LocalHistory.push('/')}}>Switch to real time mode</ButtonSensorMode>

                </DivButtonContainer>

        

        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"5% 0% 10% 0%"}}>

       {
           data.length > 0 ? 
           <div style={{marginBottom:"20px",marginLeft:"20px"}}>
            <SpanHeaders><SpanChartHeader>ID : {data[0].Sensor_ID}</SpanChartHeader></SpanHeaders>
            <SpanHeaders><SpanChartHeader>Location : {data[0].Belonging_to}</SpanChartHeader></SpanHeaders>
           </div>
           :
           null
       }
            
        {
            data.length > 0 ? 

            <ResponsiveContainer width="90%" height={300}>
                <AreaChart data = {data} >
                    <CartesianGrid strokeDasharray = "5 5" color = "lighgray" stroke = "green"/>
                    <XAxis stroke="gold" dataKey="timeStamp">
                        <Label value="TEMPERATURE" fill="#fff" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis stroke="gold" />
                    <Tooltip/>
                    <defs>
                        <linearGradient id="split" x1= "0" y1 = "0" x2 = "0" y2 = "1" >
                            <stop stopOpacity={1} stopColor="green" offset = {off}></stop>
                            <stop stopOpacity={1} stopColor="red" offset = {off}></stop>
                        </linearGradient>
                    </defs>
                    <ReferenceLine y={45} label="CRITICAL"  stroke="red" strokeWidth = "5%"/>
                    <Area  type="monotone" dataKey="Temperature" stroke="#8884d8" fill="url(#split)" />          
                </AreaChart> 

            </ResponsiveContainer>

   
            :
            <Choke></Choke>
        }
            
        {
            data.length > 0 ? 

            <ResponsiveContainer  width="90%" height={300}>
                                        
                <AreaChart data = {data} >
                    <CartesianGrid strokeDasharray = "5 5" color = "lighgray" stroke = "green"/>
                    <XAxis stroke="gold" dataKey="timeStamp">
                         <Label value="HUMIDITY" fill="#fff" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis stroke="gold" />
                    <Tooltip/>
                    <Area type="monotone" dataKey="Humidity" stroke="darkblue" fill="darkblue" />           
                </AreaChart> 

            </ResponsiveContainer>
 
            :
            null
        }

        </div>

        </div>
    )
}