import moment from 'moment'


let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth()+1;
let currentDay = new Date().getDay();
let currentWeekNumber = moment().week();


export const getQueryString = (id,hour) => {

    if(hour == null){
      //  return `DATA/Sensor_${id}/Year_${currentYear}/Month_${currentMonth}/Week_${currentWeekNumber}/Day_${currentDay}/`;
        return `DATA/Sensor_${id}/Year_${currentYear}/Month_8/Week_35/Day_3/`;
    }

    //return  `DATA/Sensor_${id}/Year_${currentYear}/Month_${currentMonth}/Week_${currentWeekNumber}/Day_${currentDay}/Hour_${hour}`;
    return  `DATA/Sensor_${id}/Year_${currentYear}/Month_8/Week_35/Day_3/Hour_9`;
         
}



