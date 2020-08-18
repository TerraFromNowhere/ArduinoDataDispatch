import styled from 'styled-components';
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

export const StyledChoke = styled.div`
    margin:12% 0px 0% 0px;
    width:100%;
    height:20vh;

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
    padding:10px 20px;
    color:#ffffff;
    background-color:#469a39;
    border-radius:5px;
    display:block;
    margin-left:10px;
    font-family:Arial;
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
`;

export const DivDataContainer = styled.div`
    color:#001a2d;
    margin:10px 0px 5px 10px;
    padding:10px 5px 10px 15px;
    font-size:22px;
    font-weight:bold;
`;


