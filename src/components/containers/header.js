import React from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import {Brief} from './pages/brief';
import {SensorInfo} from '../containers/pages/sensorInfo';
import {GeneralTable} from './pages/generalTable';
import logo from '../img/logoWernox.png';
import {DivRowFlexHeader,UlFlexNav,LinkNav} from '../containers/styledContainers/sComponents';


export const Header = () => {
    return (<div >
        <Router>
            <div>

            <DivRowFlexHeader>
                <a href={'http://wernox.ru/'}><img src={`img/${logo}`} alt="Company logo"></img></a>
            </DivRowFlexHeader>

                <nav>
                    <UlFlexNav>
                        <li><LinkNav to = "/">GENERAL TABLE</LinkNav></li>
                        <li><LinkNav to = "/sensor">SENSOR DETAIL</LinkNav></li>
                        <li><LinkNav to = "/brief">SHORT BRIEF</LinkNav></li>
                    </UlFlexNav>
                </nav>
                <Switch>
                    <Route path = "/brief"><Brief/></Route>
                    <Route path = "/sensor"><SensorInfo/></Route>
                    <Route path = "/"><GeneralTable/></Route>   
                </Switch>
            </div>
        </Router>
    </div>);
}