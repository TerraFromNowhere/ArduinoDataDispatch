import React , {useState} from "react";
import {Header} from "./containers/header";
import {Footer} from './containers/footer';
import {initApp} from './dataHandlers/firebase';


 const componentDidMount = () =>{
    React.useEffect(()=>{
         if(initApp()){
             console.log("App initialized");
         };
    },[]);
}



const App = () =>{

    componentDidMount(); 
         
    return (

        <div>
            <Header></Header>
            <Footer></Footer>                      
        </div>
       
    );

}

export default App; 