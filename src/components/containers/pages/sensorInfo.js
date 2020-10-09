import React , {useState} from 'react';
import {SpanChartHeader,SpanHeaders,StyledForm,DivButtonContainer,ButtonSensorMode,StyledInput} from '../styledContainers/sComponents';
import {dataMaxMinFinder} from '../../../const/maxMinFinder';
import {useHistory} from 'react-router-dom';
import {Choke} from '../choke';
import {ResponsiveContainer,Label,Area,CartesianGrid,XAxis,YAxis,AreaChart,Tooltip,ReferenceLine} from 'recharts';
import {submitValidator,keyNullifier} from '../../dataHandlers/submitValidator';
import {fetchData} from '../../dataHandlers/fetchData';

import {GET_DATA} from '../../../actions/actions';


export const SensorInfo = (props) => {

    let [data,stateData] = useState([]);
    let [fetching,setFetching] = useState(false);
    let [seNumber,setSeNumber] = useState([]);


    const LocalHistory = useHistory();
    const off = dataMaxMinFinder(data) || null;
    const {dispatch} = props;
    
return (

        <div>
        
            <StyledForm>       
                <StyledInput  onKeyPress = {(eve)=>{keyNullifier(eve)}} onChange={(eve)=>{submitValidator(eve,setSeNumber)}} placeholder = "Set sensor id (1-3)" className="inp" type="text" ></StyledInput>
            </StyledForm>

        

                <DivButtonContainer> 
 
                    <ButtonSensorMode onClick = {()=>{fetchData('hour',stateData,seNumber)}}>Данные за час</ButtonSensorMode>
                    <ButtonSensorMode onClick = {()=>{fetchData('day',stateData,seNumber)}}>Данные за день</ButtonSensorMode>
                    <ButtonSensorMode onClick = {()=>{LocalHistory.push('/')}}>ВЕРНУТЬСЯ В РТ. РЕЖИМ</ButtonSensorMode>
                    <ButtonSensorMode onClick = {()=>{GET_DATA('day',dispatch,seNumber)}}>REDUX</ButtonSensorMode>

                </DivButtonContainer>

        
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"5% 0% 10% 0%"}}>

       {
           data.length > 0 ? 
           <div style={{marginBottom:"20px",marginLeft:"20px"}}>
            <SpanHeaders><SpanChartHeader>НОМЕР : {data[0].sensor_id}</SpanChartHeader></SpanHeaders>
            <SpanHeaders><SpanChartHeader>ЛОКАЦИЯ : {data[0].belonging_to}</SpanChartHeader></SpanHeaders>
           </div>
           :
           null
       }
            
        {
            data.length > 0 ? 

            <ResponsiveContainer width="90%" height={300}>
                <AreaChart data = {data} >
                    <CartesianGrid strokeDasharray = "5 5" color = "lighgray" stroke = "green"/>
                    <XAxis stroke="gold" dataKey="timestamp">
                        <Label value="ТЕМПЕРАТУРА" fill="#fff" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis stroke="gold" />
                    <Tooltip/>
                    <defs>
                        <linearGradient id="split" x1= "0" y1 = "0" x2 = "0" y2 = "1" >
                            <stop stopOpacity={1} stopColor="green" offset = {off}></stop>
                            <stop stopOpacity={1} stopColor="red" offset = {off}></stop>
                        </linearGradient>
                    </defs>
                    <ReferenceLine y={45} label="КРИТИЧЕСКАЯ ОТМЕТКА"  stroke="red" strokeWidth = "5%"/>
                    <Area  type="monotone" dataKey="temperature" stroke="#8884d8" fill="url(#split)" />          
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
                    <XAxis stroke="gold" dataKey="timestamp">
                         <Label value="ВЛАЖНОСТЬ" fill="#fff" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis stroke="gold" />
                    <Tooltip/>
                    <Area type="monotone" dataKey="humidity" stroke="darkblue" fill="darkblue" />           
                </AreaChart> 

            </ResponsiveContainer>
 
            :
            null
        }

        </div>

        </div>
    )
}