import React , {useState} from "react";
import {Header} from "./containers/header";
import {Footer} from './containers/footer';
import {initApp} from './dataHandlers/firebase';






const App = () =>{

    
        React.useEffect(()=>{
             if(initApp()){
                 console.log("App initialized");
             }
        },[]);
    

     
         
    return (

        <div>
            <Header></Header>
            <Footer></Footer>                      
        </div>
       
    );

}

export default App; 