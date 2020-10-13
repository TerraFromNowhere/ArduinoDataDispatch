import React from "react";
import {Header} from "./containers/header";
import {Footer} from './containers/footer';
import furgon from './img/furgon.jpg';


//,backgroundImage:`url(${furgon})`,backgroundSize:"cover",backgroundAttachment:"fixed"  extracted from div style below

const App = () =>{
         
    return (

        <div style={{margin:"0px",padding:"0px"}}>
            <Header></Header>
            <Footer></Footer>                      
        </div>
        
       
    );

}

export default App; 