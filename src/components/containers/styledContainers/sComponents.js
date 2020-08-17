import styled from 'styled-components';

export const DivRowFlex = styled.div`
    display:flex;
    flex-direction:row;
`;

export const DivRowFlexFooter = DivRowFlex()`
    background-color:#9b9dad
`;

export const DivColFlex = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:33%;
`;

export const SpanHeaders = styled.span`
    font-size:16px;
    font-family:Sans-serif,Arial;
    font-weight:Bold;
`;

export const SpanText = styled.span`
    font-size:12px;
    font-family:Sans-serif,Arial;
    white-space:pre-line;
`;

export const LinkFooter = styled.a`
    font-size:12px;
    font-family:Sans-serif,Arial;
    text-decoration:none;
`;