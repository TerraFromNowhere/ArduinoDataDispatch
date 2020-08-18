import React from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import {Brief} from './pages/brief';
import {Sensor} from "./pages/sensor";
import {Home} from '../containers/pages/home';
import logo from '../img/logoWernox.png';
import {DivRowFlexHeader,UlFlexNav,LinkNav} from '../containers/styledContainers/sComponents';


export const Header = () => {
    return (<div >
        <Router>
            <div>

            <DivRowFlexHeader>
                <a href={'http://wernox.ru/'}><img src={logo} alt="Company logo"></img></a>
            </DivRowFlexHeader>

                <nav>
                    <UlFlexNav>
                        <li><LinkNav to = "/">HOME</LinkNav></li>
                        <li><LinkNav to = "/sensor">DETAILED SENSORS</LinkNav></li>
                        <li><LinkNav to = "/brief">SHORT BRIEF</LinkNav></li>
                    </UlFlexNav>
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