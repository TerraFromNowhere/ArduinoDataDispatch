import {getData} from './firebase.js'

const mockedData = {
    Sensor_ID:"N/A",
    Belonging_to:"N/A",
    Humidity:"0",
    Voltage:"0",
    Temperature:"0",
    timeStamp:"00:00:00"
};

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
        stateData([mockedData]);      
   });

}

export const getDataPerHour = (stateData,setFetching,queryString) => {      
        return getData().ref(queryString).once('value').then(items =>{
            stateData(Object.values(items.val()));
            console.log("Data fetched succesfully");
       }).catch(e =>{
           console.log("Nothing to fetch, data is null");
           stateData([mockedData]);
       });       
}

export const realTimeQueryImitation = (stateData,setFetching,queryString) => {
    console.log("Start to fetching data...");         
        return getData().ref(queryString).limitToLast(1).once('value').then(items =>{
           if(items.val() != null){
            stateData(Object.values(items.val()));
            console.log("Data fetched succesfully");
           }
           else {
                return stateData([mockedData]);
           }
       }).catch(e =>{
           console.log("Data fetching failed");
           return stateData([mockedData]);
       });       
}

