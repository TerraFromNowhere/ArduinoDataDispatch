const express= require('express');
const application = express();
const http = require('http');
const CORS = require('cors');
const port = 80;
const __SERVER_IP = "192.168.0.95";
const parser = require('body-parser');

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth()+1;
const currentHour = new Date().getHours();

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
 
    console.log(`Data received from sensor : ${req.body.Sensor_ID}`);

    if(req.body.Sensor_ID === "1"){
        FBD.child(`${currentYear}/Month_${currentMonth}/Hour_${currentHour}/SENSOR_${req.body.Sensor_ID}`).push(req.body).getKey();
        console.log(req.body);  
    }
 
});

application.get('/',(req,res)=>{
    res.send('Get request received');
});


const httpServer = http.createServer(application);
httpServer.listen(port,__SERVER_IP);

console.log('Server running at 192.168.0.95:80/');

