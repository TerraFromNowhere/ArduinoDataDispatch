import React , {useEffect,useState} from "react";
import {Header} from "./containers/header";
import {getData,initApp} from './dataHandlers/firebase';
import {getDataPerUnitOfTime} from './dataHandlers/query';





let [data,stateData] = useState([]);
let [dataKeys,keys] = useState([]);


const App = () =>{


    const componentDidMount = () =>{
        useEffect(()=>{
             if(initApp()){
                 console.log("App initialized");
             };
        },[]);
    }
    
    const componentShouldUpdate = React.memo(App,(prevState,nextState)=>{
        return prevState.dataKeys === nextState.dataKeys;
    })
    
    React.useEffect(()=>{
        componentShouldUpdate;
    },[dataKeys]);

    componentDidMount();

    return (

        <div>
            <Header></Header>                      
        </div>
       
    );

}

export default App; 