import React , {Component,useEffect,useState} from "react";
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

    const keys = (obj) =>{
        return Object.keys(obj);    
    }

    let k = [];

    return (
        <div style={{display:"flex",backgroundColor:"red",width:"100px",height:"100px",justifyContent:"center",alignItems:"center"}}>
             <div style={{fontWeight:"bold"}}>Hello</div>             
             <button onClick = {()=>{getData().ref("DATA/2020/Month_8/SENSOR_1").once("value").then(items=>{
                 stateData(items.val());
             })}}>GET DATA</button>

            <button onClick={()=>{  k = keys(data); console.log(data[k[0]])}}>Log my state</button>
            {
                <div>{data[k[0]].Temperature}</div>
            }
        </div>

    
       
    );

}

export default App;