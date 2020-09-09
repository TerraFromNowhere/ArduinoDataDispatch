const express= require('express');
const application = express();
const http = require('http');
const CORS = require('cors');
const port = 80;
const __SERVER_IP = "192.168.0.95";
const parser = require('body-parser');
const moment = require('moment');
const path = require('path');
const fs = require('fs');

const sqldb = require('./db/mssql/mssql.js');

const sql = require('mssql');

const credentials = require('./db/data/sqlCredentials.js');


let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth()+1;
let currentHour = new Date().getHours();
let currentDay = new Date().getDay();
let currentWeekNumber = moment().week();

//db init, return REF
const F = require('./db/db.js');
const { json } = require('body-parser');
const FBD = F();

application.use(CORS());

application.options('*',CORS());

application.use(parser.urlencoded({ extended: true }));

application.use(parser.json());

application.use((req,res,next)=>{

    let base = path.basename(req.originalUrl);
    let extension = path.extname(base);

    if(extension === ".js"){

        if(req.ip !== __SERVER_IP){
          
        let logStr = `Incomming request from ${req.ip},received in ${moment().format("DD.MM.YYYY HH:mm:ss")}\n`
        fs.writeFile('requestLogs.txt',logStr,{flag:'a+'},err=>{
            if(err){
                console.log("Unable to write into file");
            }
        });
        console.log(`Inc. req. => ${req.ip}`);

        }
    }
    next();

},express.static(__dirname+'/build'));

application.use('/realtime',async (req,res)=>{
            
    try{

        await sql.connect(credentials);
        const result = await sql.query`SELECT TOP 1 * FROM Sensor_${id} WHERE year = `;
        console.dir(result.recordset);
        res.send(result.recordset);
       
    }
    catch(e){
        console.log(e);
    }
  
})

application.use('/',(req,res)=>{

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

    let reqBody = req.body;
    reqBody.timeStamp = moment().format("HH:mm:ss");
    reqBody.Sensor_ID = Math.round(req.body.Sensor_ID) + "";
    reqBody.Voltage = Math.round(req.body.Voltage)+ "";
    reqBody.Humidity = Math.round(req.body.Humidity)+"";
    reqBody.Temperature = Math.round(req.body.Temperature)+"";

    if(req.body.Sensor_ID === "1"){
        reqBody.Belonging_to = "UNKNOWN";
    }
    if(req.body.Sensor_ID === "2"){
        reqBody.Belonging_to = "K.T.O";
    }
    if(req.body.Sensor_ID === "3"){
        reqBody.Belonging_to = "НАЧ.ПРОИЗВОДСТВА";
        reqBody.Voltage = (reqBody.Voltage / 100) + "";
    }
    if(req.body.Sensor_ID === "NaN"){
        return;
    }

    let qs = sqldb.mssqlQueryString(
        'INSERT INTO',
        reqBody.Sensor_ID,
        reqBody.Belonging_to,
        reqBody.Temperature,
        reqBody.Humidity,
        reqBody.Voltage,
        reqBody.timeStamp,
        currentYear,
        currentMonth,
        currentWeekNumber,
        currentDay,
        currentHour
    );

    sqldb.mssqlConnectDataPusher(qs,'set');
    FBD.child(`Sensor_${req.body.Sensor_ID}/Year_${currentYear}/Month_${currentMonth}/Week_${currentWeekNumber}/Day_${currentDay}/Hour_${currentHour}`).push(reqBody).getKey();
    console.log(reqBody);  
    
});


const httpServer = http.createServer(application);
httpServer.listen(port,__SERVER_IP);

console.log('Server running at 192.168.0.95:80');

