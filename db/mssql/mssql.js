const sql = require('mssql');
//types : INSERT INTO || SELECT FROM
const mssqlQueryString  = (type,id,belonging_to,temperature,humidity,voltage,timestamp,year,month,week,day,hour) => {
    return `${type} dbo.Sensor_${id} (sensor_id,belonging_to,temperature,humidity,voltage,timestamp,year,month,week,day,hour)
    values('${id}','${belonging_to}','${temperature}','${humidity}','${voltage}','${timestamp}','${year}','${month}','${week}','${day}','${hour}')`
}

//types available : get,set

const  mssqlConnectDataPusher = (queryString,type) => {

    const cred = require('../data/sqlCredentials.js');

    return sql.connect(cred).then(async pool => {

        console.log("Data pushed/received to/from mssql");

        if(type === 'set'){
            await pool.request().query(queryString).then(()=>{return sql.close()});
        }
        else if (type === 'get'){
            await pool.request().query(queryString).then(()=>{return sql.close()});
        }
        else {
            console.log('You should define type param. eg: set, get');
            return;
        }
        
        
    }).catch(error => {
        console.log("Unable to push/get data in/from db");
        console.log(error);
    });

}


module.exports = {mssqlQueryString,mssqlConnectDataPusher};







