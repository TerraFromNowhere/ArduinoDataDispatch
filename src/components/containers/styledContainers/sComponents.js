import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

export const DivRowFlex = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`;

export const DivRowFlexHeader = styled(DivRowFlex)`
    justify-content:flex-start;
    margin:30px 0px 0px 40px;
`;

export const DivRowFlexFooter =styled.div`
    background-color:#7195f9;
    display:flex;
    margin:10px 0px 0px 0px;
`;

export const DivColFlex = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:33%;
    padding:20px 5px 20px 20px;
    margin:15px 0px 15px 10px;
`;

export const SpanHeaders = styled.span`
    font-size:16px;
    font-family:Sans-serif,Arial;
    font-weight:Bold;
    padding-bottom:10px;
`;

export const SpanText = styled.span`
    font-size:12px;
    font-family:Sans-serif,Arial;
    white-space:pre-line;
    color:#392d58;
`;

export const SpanTextFooter = styled(SpanText)`
    padding: 20px 0px 20px 20px;
    font-size:14px;
    font-weight:bold;
`;

export const LinkFooter = styled.a`
    font-size:12px;
    font-family:Sans-serif,Arial;
    text-decoration:none;
    font-weight:bold;
    color:#508ffb;
    padding:5px 0px 5px 0px;
    &:hover {
        color:red;
    };
`;


export const FooterStyled = styled.footer`
    opacity:0.6;
    
`;

export const UlFlexNav = styled.ul`
    display:flex;
    list-style:none;
`;

export const LinkNav = styled(Link)`
    text-decoration:none;
    border:2px solid #ff1744;
    padding:10px 20px;
    color:#ffffff;
    background-color:#ff1744;
    border-radius:5px;
    display:block;
    margin-left:10px;
    font-family:Arial;
    box-shadow:-2px 3px 5px 0px;
    margin-left:30px;
    font-weight:bold;

    &:hover{
        box-shadow:2px -3px 5px 1px;
        background-color:#a5014a; 
    }
`;

export const DivButtonContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    margin:30px 0px 0px 0px;
`;

export const ButtonSensorMode = styled.button`
    border:2px solid #469a39;
    padding:5px 10px;
    color:#ffffff;
    background-color:#469a39;
    border-radius:5px;
    display:block;
    margin-left:10px;
    font-family:Arial;
    font-size:10px;
    box-shadow:-2px 3px 5px 0px ;
    margin-left:20px;
    font-weight:bold;

    &:hover{
        box-shadow:2px -3px 5px 1px ;
        background-color:#85f6a9; 
    };

    &:active{
        border:2px solid #469a39;
    };


`;

export const DivDataWrapper = styled.div`
    display:flex;
    flex-basis:15%;
    justify-content:flex-start;
    flex-direction:column;
    border:5px solid #469a39;
    border-radius : 10px;
    margin-left:15px;
    background-color:#ffffff;
    opacity:0.7;
    margin-top:5px;
`;

export const DivDataContainer = styled.div`
    color:#001a2d;
    margin:5px 0px 5px 5px;
    padding:15px 5px 5px 10px;
    font-size:16px;
    font-weight:bold;
`;

export const DivDataContainerDetailed = styled(DivDataContainer)`
    padding-top:5px;
`;

export const DivDataWrapperSensor = styled(DivDataWrapper)`
    margin-left:15px;
    margin-bottom:20px;
    width:220px;
    flex-basis:inherit;
`;

export const DivDataContainerHeader = styled(DivDataContainer)`
    background-color:darkblue;
    color:white;
    text-align:center;
    font-size:16px;
    margin-top:0px;
    margin-bottom:0px;
    margin-left:0px;
`;

const animationRotate = keyframes`
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
`;

export const RotatedImg = styled.img`
    width:24px;
    height:24px;
    animation: ${animationRotate} 2s linear infinite;
    margin:25vh 10px 15vh 15vw;   
`;


export const StyledChoke = styled.img`
    margin:4% 0px 0% 45%;
    width:20vh;
    height:20vh;
    animation: ${animationRotate} 3s linear infinite;
    backgroung-opacity:0;
`;


