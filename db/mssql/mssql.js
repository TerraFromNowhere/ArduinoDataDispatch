const sql = require('mssql');

const mssqlQueryString  = (id,belonging_to,temperature,humidity,voltage,timestamp,year,month,week,day,hour) => {
    return `INSERT INTO dbo.Sensor_${id} (sensor_id,belonging_to,temperature,humidity,voltage,timestamp,year,month,week,day,hour)
    values('${id}','${belonging_to}','${temperature}','${humidity}','${voltage}','${timestamp}','${year}','${month}','${week}','${day}','${hour}')`
}

const  mssqlConnectDataPusher = (queryString) => {

    const cred = require('../data/sqlCredentials.js');

    return sql.connect(cred).then(async pool => {
        console.log("Data sended to mssql");
        await pool.request().query(queryString);
        
    }).catch(error => {
        console.log("Unable to push data in db");
        console.log(error);
    });

}


module.exports = {mssqlQueryString,mssqlConnectDataPusher};







