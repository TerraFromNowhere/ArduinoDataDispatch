import React , {useState} from "react";
import {Header} from "./containers/header";
import {initApp} from './dataHandlers/firebase';






 const componentDidMount = () =>{
    React.useEffect(()=>{
         if(initApp()){
             console.log("App initialized");
         };
    },[]);
}


const componentShouldUpdate = React.memo(App,(prevState,nextState)=>{
    return prevState.dataKeys === nextState.dataKeys;
}) 


const App = () =>{

     componentDidMount(); 
     let [data,stateData] = useState([]);
     let [dataKeys,keys] = useState([]);
    
     React.useEffect(()=>{
        componentShouldUpdate;
    },[dataKeys]);
    
   

   
    return (

        <div>
            <Header></Header>                      
        </div>
       
    );

}

export default App; 