import React from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import {Brief} from './pages/brief';
import {Sensor} from "./pages/sensor";
import {Home} from '../containers/pages/home';
import logo from '../img/logoWernox.png';


const headerStyle = {fontWeight:"bold",fontSize:"16px",display:"flex",backgroundColor:"grey",justifyContent:"center",alignItems:"center",height:"10rem"};


export const Header = (stateData,keys,getDataPerUnitOfTime,style) => {
    return (<div style = {headerStyle}>
        <Router>
            <div>
                <a href={'http://wernox.ru/'}><img src={logo} alt="Company logo"></img></a>
                <span><span style={{color:"orange",fontSize:"20px"}}>W</span>ernox sensor data tracker</span>
                <nav>
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/sensor">Detailed sensor</Link></li>
                        <li><Link to = "/brief">Short brief</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path = "/brief"><Brief/></Route>
                    <Route path = "/sensor"><Sensor/></Route>
                    <Route path = "/home"><Home stateData = {stateData} keys = {keys} getDataPerUnitOfTime = {getDataPerUnitOfTime}/></Route>   
                </Switch>
            </div>
        </Router>
    </div>);
}