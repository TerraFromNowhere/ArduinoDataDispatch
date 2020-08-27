import {getData} from './firebase.js'


export const getDataPerDay = (stateData,setFetching,queryString) =>{
   
    setFetching(true);
   
   return getData().ref().child(queryString).once('value').then(items =>{

        let tt = Object.values(items.val());
        let arr = [];

        tt.forEach((item)=>{
            for( let i in item){
                arr.push(item[i]);
            }
        })

        arr.sort((a,b)=>{

            if(a.timeStamp > b.timeStamp){
                return 1;
            }
            if(a.timeStamp < b.timeStamp){
                return  -1;
            }

            return 0;
        })

        stateData(arr);   
        setFetching(false);

   }).catch(e =>{
        setFetching(false);
        stateData({
            Sensor_ID:"No data fetched per last hour",
            Belonging_to:"",
            Humidity:"",
            Voltage:"",
            Temperature:"",
            timeStamp:""

        });
       throw new Error(`Error ${e}`);      
   });

}

export const getDataPerHour = (stateData,setFetching,queryString) => {      
        return getData().ref(queryString).once('value').then(items =>{
            stateData(Object.values(items.val()));
            console.log("Data fetched from sensor_1");
       }).catch(e =>{
           throw new Error(`Error ${e}`);
       });       
}

export const realTimeQueryImitation = (stateData,setFetching,queryString) => {
    console.log("Start to fetching data...");         
        return getData().ref(queryString).limitToLast(1).once('value').then(items =>{
           if(items.val() != null){
            stateData(Object.values(items.val()));
            console.log("Data fetched from sensor_1");
           }
           else {
               console.log("Nothing to fetch, sensor send null");
           }
       }).catch(e =>{
           throw new Error(`Error ${e}`);
       });       
}

