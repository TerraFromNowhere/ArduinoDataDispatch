import React , {Component,useEffect,useState} from "react";
import {getData,initApp} from './dataHandlers/firebase';




const componentDidMount = () =>{
    React.useEffect(()=>{
         if(initApp()){
             console.log("App initialized");
         };
    },[]);
}

const App = () =>{
      
    componentDidMount();
    let [data,stateData] = useState(0)

    return (
        <div style={{display:"flex",backgroundColor:"red",width:"100px",height:"100px",justifyContent:"center",alignItems:"center"}}>
             <div style={{fontWeight:"bold"}}>Hello</div>
             <button onClick = {() => { stateData(getData())}}>GET DATA</button>
        </div>
       
    );

}

export default App;