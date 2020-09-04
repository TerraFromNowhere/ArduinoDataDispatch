import React from "react";
import {Header} from "./containers/header";
import {Footer} from './containers/footer';
import {initApp} from './dataHandlers/firebase';
import furgon from './img/furgon.jpg';


const App = () =>{

    
        React.useEffect(()=>{
             if(initApp()){
                 console.log("App initialized");
             }
        },[]);
        
         
    return (

        <div style={{margin:"0px",padding:"0px",backgroundImage:`url(${furgon})`,backgroundSize:"cover",backgroundAttachment:"fixed"}}>
            <Header></Header>
            <Footer></Footer>                      
        </div>
       
    );

}

export default App; 