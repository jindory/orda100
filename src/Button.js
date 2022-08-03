import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${(props) => props.color || "#EBEFF1"};
    width: ${(props) => (props.size === "big" ? "200px" : "auto")};
    height: ${(props) => (props.size === "big" ? "80px" : "auto")};
    border-radius: 6px;
    border:0;
    padding:7px 10px;
    font-weight: 600;
    font-size:0.9375rem;
    color:#54626C;
    &:hover{  
        background-color :#000;
        color : #fff
    }
`;

const Button = ({color, size ,text}) => (
    <StyledButton color={color} size={size}>{text}</StyledButton>
)

export default Button