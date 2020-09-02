import React from 'react';
import {RotatedImg,DivDataContainer,DivDataContainerHeader,DivDataWrapperSensor} from '../styledContainers/sComponents';
import {realTimeQueryImitation} from '../../dataHandlers/query';
import {useState,useEffect} from 'react';
import {getQueryString} from '../../../const/queryConst';
import spinner from '../../img/spinner.png';


export const Sensor_1 = () => {

    let [data,stateData] = useState([]);
    let [fetching,setFetching] = useState(false);

    useEffect(()=>{

        setFetching(true); 
        let interval = setInterval(()=>{             
            realTimeQueryImitation(stateData,setFetching,getQueryString(1,new Date().getHours()));
            setFetching(false);
        },5000);
    
        return ()=> {
            clearInterval(interval);
        }
        
    
    },[]);

    return (

        <div style={{display:'flex',justifyContent:'center'}}>

    {
 
    data.length != 0 ? 


        data.map((item,i)=>{

        return ( 
           
                <DivDataWrapperSensor key = {i}>
 
                 <DivDataContainerHeader> SENSOR_ID : { data[0].Sensor_ID  }   </DivDataContainerHeader>
                 <DivDataContainerHeader> LOCATION : {data[0].Belonging_to  }  </DivDataContainerHeader>
                 <DivDataContainer> Temperature : {data[0].Temperature }C</DivDataContainer>
                 <DivDataContainer> Humidity : {data[0].Humidity }%      </DivDataContainer>
                 <DivDataContainer> Voltage : {data[0].Voltage  }V        </DivDataContainer>
                 <DivDataContainer> Received in : {data[0].timeStamp }    </DivDataContainer>
 
                </DivDataWrapperSensor>


           ); 

            })
        
        : 
            <RotatedImg src = {`${spinner}`} ></RotatedImg>

        } 

        

        </div>
        
    );
}

export const Sensor_2 = () => {

    let [data2,stateData2] = useState([]); 
    let [fetching,setFetching] = useState(false);

    useEffect(()=>{

        setFetching(true); 
        let interval = setInterval(()=>{                    
            realTimeQueryImitation(stateData2,setFetching,getQueryString(2,new Date().getHours()));
            setFetching(false);
        },5000);
    
        return ()=> {
            clearInterval(interval);
        }
        
    
    },[]);

    return (

     
        <div>

        {
     
        data2.length > 0 ? 
    
    
            data2.map((item,i)=>{
    
            return <DivDataWrapperSensor key = {i}>
     
                     <DivDataContainerHeader> SENSOR_ID : { data2[0].Sensor_ID  }   </DivDataContainerHeader>
                     <DivDataContainerHeader> LOCATION : {data2[0].Belonging_to  }  </DivDataContainerHeader>
                     <DivDataContainer> Temperature : {data2[0].Temperature }C</DivDataContainer>
                     <DivDataContainer> Humidity : {data2[0].Humidity }%      </DivDataContainer>
                     <DivDataContainer> Voltage : {data2[0].Voltage  }V        </DivDataContainer>
                     <DivDataContainer> Received in : {data2[0].timeStamp }    </DivDataContainer>
     
                 </DivDataWrapperSensor> 
    
                })
            
            : 
                <RotatedImg src = {`${spinner}`} ></RotatedImg>
    
            }      
    
            </div>
    );
}

export const Sensor_3 = () => {

    let [data3,stateData3] = useState([]);
    let [fetching,setFetching] = useState(false);

    useEffect(()=>{

        setFetching(true); 
        let interval = setInterval(()=>{             
            realTimeQueryImitation(stateData3,setFetching,getQueryString(3,new Date().getHours()));
            setFetching(false);
        },5000);
    
        return ()=> {
            clearInterval(interval);
        }
        
    
    },[]);

    return (

        <div>

        {
     
             data3.length > 0 ? 
    
    
            data3.map((item,i)=>{
    
            return <DivDataWrapperSensor key = {i}>
     
                     <DivDataContainerHeader> SENSOR_ID : { data3[0].Sensor_ID  }   </DivDataContainerHeader>
                     <DivDataContainerHeader> LOCATION : {data3[0].Belonging_to  }  </DivDataContainerHeader>
                     <DivDataContainer> Temperature : {data3[0].Temperature }C</DivDataContainer>
                     <DivDataContainer> Humidity : {data3[0].Humidity }%      </DivDataContainer>
                     <DivDataContainer> Voltage : {data3[0].Voltage  }V        </DivDataContainer>
                     <DivDataContainer> Received in : {data3[0].timeStamp }    </DivDataContainer>
     
                 </DivDataWrapperSensor> 
    
                })
            
            : 
                <RotatedImg src = {`${spinner}`} ></RotatedImg>
    
            }      
    
            </div>
        
    );
}