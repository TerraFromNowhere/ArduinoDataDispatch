import React from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import {Brief} from './pages/brief';
import {Sensor} from "./pages/sensor";
import {Home} from '../containers/pages/home';
import logo from '../img/logoWernox.png';


const headerStyle = {fontWeight:"bold",fontSize:"16px",display:"flex",backgroundColor:"",justifyContent:"",alignItems:"center",height:""};


export const Header = () => {
    return (<div style = {headerStyle}>
        <Router>
            <div>
                <a href={'http://wernox.ru/'}><img src={logo} alt="Company logo"></img></a>
                <span><span style={{color:"orange",fontSize:"20px"}}>W</span>ernox sensor data tracker</span>
                <nav>
                    <ul style = {{display:"flex",justifyContent:"space-around",listStyle:"none"}}>
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/sensor">Detailed sensor</Link></li>
                        <li><Link to = "/brief">Short brief</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path = "/brief"><Brief/></Route>
                    <Route path = "/sensor"><Sensor/></Route>
                    <Route path = "/"><Home/></Route>   
                </Switch>
            </div>
        </Router>
    </div>);
}