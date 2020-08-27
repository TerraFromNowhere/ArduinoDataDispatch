import React from "react";
import {SpanHeaders} from '../styledContainers/sComponents';

export const Brief = () => {
   
   return <SpanHeaders style = {{padding:"5% 5% 6% 7%",margin:"10px",textShadow:"1px 1px 1px #000",fontSize:"1.2rem",display:"block",color:"whitesmoke"}}>

      Приложение позволяет просматривать 
      и анализировать данные, полученные с температурных 
      датчиков внутри предприятия.
      На текущий момент доступно 3 режима :
      <ul style = {{listStyle:"none"}}>
         <li>1) Просмотр показаний в режиме реального времени</li>
         <li>2) Просмотр показаний за последний час</li>
         <li>3) Просмотр показаний за последние сутки</li>
      </ul>
     
         </SpanHeaders>
}