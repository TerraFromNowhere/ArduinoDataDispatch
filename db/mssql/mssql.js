const sql = require('mssql');

const mssqlQueryStringInsert  = (id,belonging_to,temperature,humidity,voltage,timestamp,year,month,week,day,hour) => {
    return `INSERT INTO dbo.Sensor_${id} (sensor_id,belonging_to,temperature,humidity,voltage,timestamp,year,month,week,day,hour)
    values('${id}','${belonging_to}','${temperature}','${humidity}','${voltage}','${timestamp}','${year}','${month}','${week}','${day}','${hour}')`
}


const  mssqlConnectDataPusher = (queryString) => {

    const cred = require('../data/sqlCredentials.js');

    return sql.connect(cred).then(async pool => {

        console.log("Data pushed/received to/from mssql");
        await pool.request().query(queryString).then(()=>{return sql.close()});        
        
    }).catch(error => {
        console.log("Unable to push/get data in/from db");
        console.log(error);
    });

}

module.exports = {mssqlQueryStringInsert,mssqlConnectDataPusher};







