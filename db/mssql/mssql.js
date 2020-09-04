const sql = require('mssql');

const  sqlConnect = () => {

    const cred = require('../data/sqlCredentials.js');

    return sql.connect(cred).then(pool => {
        console.log(pool);
    }).catch(error => {
        console.log(error);
    });

}

module.exports = sqlConnect;






