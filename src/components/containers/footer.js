import React from "react";
import {DivRowFlex,DivRowFlexFooter,DivColFlex,SpanHeaders,SpanText,LinkFooter,SpanTextFooter,FooterStyled} from './styledContainers/sComponents';

const footerStyle = {
    backgroundColor:"#eff4fa",
    visibility:"hidden"
}



export const Footer = () => {
    return(
        <FooterStyled style = {footerStyle}>
            <DivRowFlex>   
                <DivColFlex >
                    <SpanHeaders>Контакты</SpanHeaders>
                    <SpanText>
                        { "Адрес \n 445045, Россия, Самарская обл. \n г.Тольятти, ул. Ярославская 8, \n офис 232, а/я 1812" }                    
                    </SpanText>
                    <SpanText>
                        Телефон/факс: 
                        (8482) 31-92-32, 
                        31-92-27, 
                        31-92-89
                    </SpanText>
                    <SpanText>
                        E-mail: <LinkFooter href="mailto:info@wernox.ru">info@wernox.ru</LinkFooter>
                    </SpanText>
                </DivColFlex>
                <DivColFlex className = "resources">
                    <SpanHeaders>Ресурсы компании</SpanHeaders>
                    <LinkFooter target="_blank" href="http://wernox.ru/">Группа компаний</LinkFooter>
                    <LinkFooter target="_blank" href="http://bunkerovoz.ru/">Бункеровозы</LinkFooter>
                    <LinkFooter target="_blank" href="http://spec-vaz.ru/">Спец.техника</LinkFooter>
                </DivColFlex>
                <DivColFlex className = "socials">
                    <SpanHeaders>Мы в социальных сетях :</SpanHeaders>
                    <LinkFooter target="_blank" href="https://vk.com/wernox_vis">ВКонтакте</LinkFooter>
                    <LinkFooter target="_blank" href="https://www.facebook.com/Wernox63/">Facebook</LinkFooter>
                    <LinkFooter target="_blank" href="https://www.youtube.com/channel/UCDR-LWNjNTfWKrQeYbhfvUg">Youtube</LinkFooter>
                </DivColFlex>
            </DivRowFlex>
            <DivRowFlexFooter>
                <SpanTextFooter>2020 All rights reserved.</SpanTextFooter>
                <SpanTextFooter>Wernox</SpanTextFooter>
            </DivRowFlexFooter>
        </FooterStyled>
    );
}