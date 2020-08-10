import React , {useEffect,useState} from "react";
import {getData,initApp} from './dataHandlers/firebase';
import logo from './img/logoWernox.png';
import {getDataPerUnitOfTime} from './dataHandlers/query';





//hooked componentDidMount
const componentDidMount = () =>{
    useEffect(()=>{
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

        <div style={{}}>

             <div style={{fontWeight:"bold",fontSize:"16px",fontFamily:"ComicSans",display:"flex",backgroundColor:"grey",justifyContent:"center",alignItems:"center",height:"10rem"}}>
             <a href={'http://wernox.ru/'}><img src={logo} alt="Company logo"></img></a>
                 <span><span style={{color:"orange",fontSize:"20px"}}>W</span>ernox sensor data tracker</span></div> 

             <div style={{display:"flex",justifyContent:"center", width:""}}> <button style ={{width:"190px",height:"130px",color:"orange",fontSize:"30px"}} onClick = {()=>{getData().ref("DATA/2020/Month_8/Hour_10/SENSOR_1").once("value").then(items=>{
                 stateData(items.val());
                 keys(Object.keys(items.val()));
             })}}>GET DATA</button>
            <button>GET REAL TIME DATA  (refresh every n second)</button>
            <button onClick={()=>{getDataPerUnitOfTime(stateData,keys,`DATA/2020/Month_8/Hour_10/SENSOR_1`)}}>GET DATA PER HOUR</button>
            <button>GET DATA PER DAY</button>
            <button>GET DATA PER WEEK</button>            
            <button onClick={()=>{console.log(dataKeys)}}>Log my state</button> </div>
             
         {
             dataKeys.map((item,i)=>{
             return <div style={{border:" 2px solid red"}} key = {i}>

               <div> Sensor_id : {data[item].Sensor_ID}     </div>
               <div> Temperature : {data[item].Temperature}C</div>
               <div> Humidity : {data[item].Humidity}%      </div>
               <div> Voltage : {data[item].Voltage}V        </div>

                    </div>
             })
         }    
             
        </div>
       
    );

}

export default App; 