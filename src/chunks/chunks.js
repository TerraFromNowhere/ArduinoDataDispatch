/* {
 
    data.length > 0 ?
    
                 
    data.map((item,i)=>{



        return <DivDataWrapper key = {i}>
    
            <DivDataContainerHeader> Sensor_id : {item.Sensor_ID}     </DivDataContainerHeader>
            <DivDataContainerHeader> Location : {item.Belonging_to}</DivDataContainerHeader>
            <DivDataContainerDetailed> Humidity : {item.Humidity}%      </DivDataContainerDetailed>
            <DivDataContainerDetailed> Voltage : {item.Voltage}V        </DivDataContainerDetailed>
            <DivDataContainerDetailed> Temperature : {item.Temperature}C     </DivDataContainerDetailed>
            <DivDataContainerDetailed> Received at : {item.timeStamp}    </DivDataContainerDetailed>

            </DivDataWrapper> 
      
        })

    
      
     : 
        <Choke></Choke>

    } */