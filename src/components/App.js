import React , {Component,useEffect,useState, useRef} from "react";
import {getData,initApp} from './dataHandlers/firebase';



//hooked componentDidMount
const componentDidMount = () =>{
    React.useEffect(()=>{
         if(initApp()){
             console.log("App initialized");
         };
    },[]);
}




const App = () =>{
      
    componentDidMount();
    let [data,stateData] = useState([]);
    let [dataKeys,keys] = useState([]);


    const componentShouldUpdate = React.memo(App,(prevState,nextState)=>{
        return prevState.dataKeys === nextState.dataKeys;
    })
    
    React.useEffect(()=>{
        componentShouldUpdate;
    },[dataKeys]);


    return (
        <div style={{display:"flex",backgroundColor:"grey",justifyContent:"space-around",alignItems:"center"}}>
             <div style={{fontWeight:"bold",fontSize:"16px",fontFamily:"ComicSans"}}><span style={{color:"orange",fontSize:"20px"}}>W</span>ernox sensor data tracker</div>             
             <button onClick = {()=>{getData().ref("DATA/2020/Month_8/SENSOR_1").once("value").then(items=>{
                 stateData(items.val());
                 keys(Object.keys(items.val()));
             })}}>GET DATA</button>
                             
            <button onClick={()=>{   console.log(dataKeys)}}>Log my state</button>

         {
             dataKeys.map((item,i)=>{
             return <div style={{border:" 2px solid red"}} key = {i}>

               <div> Sensor_id : {data[item].Sensor_ID} </div>
               <div> Temperature : {data[item].Temperature}C</div>
               <div> Humidity : {data[item].Humidity}%   </div>
               <div> Voltage : {data[item].Voltage}V    </div>

                    </div>
             })
         }    
             
        </div>

    
       
    );

}

export default App; 