import React from 'react';
import {RotatedImg,DivDataContainer,DivDataContainerHeader,DivDataWrapperSensor} from '../styledContainers/sComponents';
import {useState,useEffect} from 'react';
import spinner from '../../img/spinner.png';
import {fetchData} from '../../dataHandlers/fetchData';


export const Sensor_1 = () => {

    let [data,stateData] = useState([]);
    let [fetching,setFetching] = useState(false);

    useEffect(()=>{

        setFetching(true); 
        let interval = setInterval(()=>{             
            fetchData('realtime',stateData,1);
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
 
                 <DivDataContainerHeader> НОМЕР СЕНСОРА : { data[0].sensor_id  }   </DivDataContainerHeader>
                 <DivDataContainerHeader> ЛОКАЦИЯ : {data[0].belonging_to  }  </DivDataContainerHeader>
                 <DivDataContainer> ТЕМПЕРАТУРА : {data[0].temperature }C</DivDataContainer>
                 <DivDataContainer> ВЛАЖНОСТЬ : {data[0].humidity }%      </DivDataContainer>
                 <DivDataContainer> ВОЛЬТАЖ : {data[0].voltage  }V        </DivDataContainer>
                 <DivDataContainer> ПОЛУЧЕНО В : {data[0].timestamp }    </DivDataContainer>
 
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
            fetchData('realtime',stateData2,2);
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
     
                     <DivDataContainerHeader> НОМЕР СЕНСОРА : { data2[0].sensor_id  }   </DivDataContainerHeader>
                     <DivDataContainerHeader> ЛОКАЦИЯ : {data2[0].belonging_to  }  </DivDataContainerHeader>
                     <DivDataContainer> ТЕМПЕРАТУРА : {data2[0].temperature }C</DivDataContainer>
                     <DivDataContainer> ВЛАЖНОСТЬ : {data2[0].humidity }%      </DivDataContainer>
                     <DivDataContainer> ВОЛЬТАЖ : {data2[0].voltage  }V        </DivDataContainer>
                     <DivDataContainer> ПОЛУЧЕНО В : {data2[0].timestamp }    </DivDataContainer>
     
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
            fetchData('realtime',stateData3,3);
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
     
                     <DivDataContainerHeader> НОМЕР СЕНСОРА : { data3[0].sensor_id  }   </DivDataContainerHeader>
                     <DivDataContainerHeader> ЛОКАЦИЯ : {data3[0].belonging_to  }  </DivDataContainerHeader>
                     <DivDataContainer> ТЕМПЕРАТУРА : {data3[0].temperature }C</DivDataContainer>
                     <DivDataContainer> АТМОСФЕРНОЕ ДАВЛЕНИЕ : {data3[0].humidity } Pa      </DivDataContainer>
                     <DivDataContainer> ВОЛЬТАЖ  : {data3[0].voltage  } V  </DivDataContainer>
                     <DivDataContainer> ПОЛУЧЕНО В : {data3[0].timestamp }    </DivDataContainer>
     
                 </DivDataWrapperSensor> 
    
                })
            
            : 
                <RotatedImg src = {`${spinner}`} ></RotatedImg>
    
            }      
    
            </div>
        
    );
}


export const Sensor_4 = () => {

    let [data4,stateData4] = useState([]);
    let [fetching,setFetching] = useState(false);

    useEffect(()=>{

        setFetching(true); 
        let interval = setInterval(()=>{             
            fetchData('realtime',stateData4,4);
            setFetching(false);
        },5000);
    
        return ()=> {
            clearInterval(interval);
        }
        
    
    },[]);

    return (

        <div>

        {
     
             data4.length > 0 ? 
    
    
            data4.map((item,i)=>{
    
            return <DivDataWrapperSensor key = {i}>
     
                     <DivDataContainerHeader> НОМЕР СЕНСОРА : { data4[0].sensor_id  }   </DivDataContainerHeader>
                     <DivDataContainerHeader> ЛОКАЦИЯ : {data4[0].belonging_to  }  </DivDataContainerHeader>
                     <DivDataContainer> ТЕМПЕРАТУРА : {data4[0].temperature }C</DivDataContainer>
                     <DivDataContainer> ВЛАЖНОСТЬ : {data4[0].humidity }%      </DivDataContainer>
                     <DivDataContainer> ВОЛЬТАЖ : {data4[0].voltage  }V        </DivDataContainer>
                     <DivDataContainer> ПОЛУЧЕНО В : {data4[0].timestamp }    </DivDataContainer>
     
                 </DivDataWrapperSensor> 
    
                })
            
            : 
                <RotatedImg src = {`${spinner}`} ></RotatedImg>
    
            }      
    
            </div>
        
    );
}

export const Sensor_5 = () => {

    let [data5,stateData5] = useState([]);
    let [fetching,setFetching] = useState(false);

    useEffect(()=>{

        setFetching(true); 
        let interval = setInterval(()=>{             
            fetchData('realtime',stateData5,5);
            setFetching(false);
        },5000);
    
        return ()=> {
            clearInterval(interval);
        }
        
    
    },[]);

    return (

        <div>

        {
     
             data5.length > 0 ? 
    
    
            data5.map((item,i)=>{
    
            return <DivDataWrapperSensor key = {i}>
     
                     <DivDataContainerHeader> НОМЕР СЕНСОРА : { data5[0].sensor_id  }   </DivDataContainerHeader>
                     <DivDataContainerHeader> ЛОКАЦИЯ : {data5[0].belonging_to  }  </DivDataContainerHeader>
                     <DivDataContainer> ТЕМПЕРАТУРА : {data5[0].temperature }C</DivDataContainer>
                     <DivDataContainer> ВЛАЖНОСТЬ : {data5[0].humidity }%      </DivDataContainer>
                     <DivDataContainer> ВОЛЬТАЖ : {data5[0].voltage  }V        </DivDataContainer>
                     <DivDataContainer> ПОЛУЧЕНО В : {data5[0].timestamp }    </DivDataContainer>
     
                 </DivDataWrapperSensor> 
    
                })
            
            : 
                <RotatedImg src = {`${spinner}`} ></RotatedImg>
    
            }      
    
            </div>
        
    );
}

export const Sensor_6 = () => {

    let [data6,stateData6] = useState([]);
    let [fetching,setFetching] = useState(false);

    useEffect(()=>{

        setFetching(true); 
        let interval = setInterval(()=>{             
            fetchData('realtime',stateData6,6);
            setFetching(false);
        },5000);
    
        return ()=> {
            clearInterval(interval);
        }
        
    
    },[]);

    return (

        <div style={{display:'none'}}>

        {
     
             data6.length > 0 ? 
    
    
            data6.map((item,i)=>{
    
            return <DivDataWrapperSensor key = {i}>
     
                     <DivDataContainerHeader> НОМЕР СЕНСОРА : { data6[0].sensor_id  }   </DivDataContainerHeader>
                     <DivDataContainerHeader> ЛОКАЦИЯ : {data6[0].belonging_to  }  </DivDataContainerHeader>
                     <DivDataContainer> ТЕМПЕРАТУРА : {data6[0].temperature }C</DivDataContainer>
                     <DivDataContainer> ВЛАЖНОСТЬ : {data6[0].humidity }%      </DivDataContainer>
                     <DivDataContainer> ВОЛЬТАЖ : {data6[0].voltage  }V        </DivDataContainer>
                     <DivDataContainer> ПОЛУЧЕНО В : {data6[0].timestamp }    </DivDataContainer>
     
                 </DivDataWrapperSensor> 
    
                })
            
            : 
                <RotatedImg src = {`${spinner}`} ></RotatedImg>
    
            }      
    
            </div>
        
    );
}