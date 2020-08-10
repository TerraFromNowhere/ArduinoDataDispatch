const express= require('express');
const application = express();
const http = require('http');
const CORS = require('cors');
const port = 80;
const __SERVER_IP = "192.168.0.95";
const parser = require('body-parser');
const moment = require('moment');

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth()+1;
let currentHour = new Date().getHours();
let currentDay = new Date().getDay();
let currentWeekNumber = moment().week();


//db init, return REF
const F = require('./db/db.js');
const FBD = F();

application.use(CORS());

application.options('*',CORS());

application.use(parser.urlencoded({ extended: true }));

application.use(parser.json());

application.post('/',(req,res)=>{

    if(!req.body){
        console.log("Body of request is undefined!");
    }

    if(currentMonth !== new Date().getMonth()+1){
        currentMonth = new Date().getMonth()+1;
    }

    if(currentDay !== new Date().getDay()){
        currentDay = new Date().getDay();
    }

    if(currentHour !== new Date().getHours()){
        currentHour = new Date().getHours();
    }
 
    console.log(`Data received from sensor : ${req.body.Sensor_ID}`);
    console.log(`Current year's week : ${currentWeekNumber}`);

    if(req.body.Sensor_ID === "1"){
        FBD.child(`Sensor_${req.body.Sensor_ID}/Year_${currentYear}/Month_${currentMonth}/Week_${currentWeekNumber}/Day_${currentDay}/Hour_${currentHour}`).push(req.body).getKey();
        console.log(req.body);  
    }
 
});

application.get('/',(req,res)=>{
    res.send('Get request received');
});


const httpServer = http.createServer(application);
httpServer.listen(port,__SERVER_IP);

console.log('Server running at 192.168.0.95:80/');

