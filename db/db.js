

const initAdminFirebaseAuth = () =>{

    const admin = require("firebase-admin");
    const path = require("path");
    const SA = require(path.resolve(__dirname+'/data/sensordatastore-7af61-firebase-adminsdk-z32q3-31b00b7fa7.json'));

    admin.initializeApp({
        credential: admin.credential.cert(SA),
        databaseURL: "https://sensordatastore-7af61.firebaseio.com"
    });

    const db = admin.database();
    const ref = db.ref("/DATA");
   
    return ref;
}

module.exports = initAdminFirebaseAuth;









 


