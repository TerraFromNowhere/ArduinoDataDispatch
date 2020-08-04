import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


  const getConfig = () =>{
    return ( {
        apiKey: "AIzaSyBl-HhlMHWhmDhtbzq5NXlVexuPu90jsrU",
        authDomain: "sensordatastore-7af61.firebaseapp.com",
        databaseURL: "https://sensordatastore-7af61.firebaseio.com",
        projectId: "sensordatastore-7af61",
        storageBucket: "sensordatastore-7af61.appspot.com",
        messagingSenderId: "573422456687",
        appId: "1:573422456687:web:5a43d81bd086781b2d229a",
        measurementId: "G-5DRDQ35QWY"
      });
  }

  export const initApp = () => {
    return  firebase.initializeApp(getConfig());
  }

  export const getData = () => {
     return  firebase.database().ref("DATA/Month_8").once("value").then((data)=>{
        return data;
     })
        
        
  }

  
  


/*   firebase.auth().signInWithEmailAndPassword(email,password).catch(err =>{
      console.log(err);
  }) */