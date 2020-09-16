

export const dataMaxMinFinder = (data) =>{

    const maxValue = Math.max(...data.map((item)=>{
      return  item.temperature;
    }));

    const minValue = Math.min(...data.map((item)=>{
        return  item.temperature;
      }));

    if( maxValue <= 0){
        return 0;
    }
    else if(minValue >= 0){
        return 1;
    }
    return maxValue  / (maxValue - minValue);  
}

