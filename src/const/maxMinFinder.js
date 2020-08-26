import React from 'react';

export const dataMaxMinFinder = (data) =>{

    const maxValue = Math.max(...data.map((item)=>{
      return  item.Temperature;
    }));

    const minValue = Math.min(...data.map((item)=>{
        return  item.Temperature;
      }));

    if( maxValue <= 0){
        return 0;
    }
    else if(minValue >= 0){
        return 1;
    }
    return maxValue  / (maxValue - minValue);  
}

