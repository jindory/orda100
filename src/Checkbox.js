import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
    background: ${(props) => props.color || "#EBEFF1"};
    width: ${(props) => (props.size === "big" ? "200px" : "auto")};
    height: ${(props) => (props.size === "big" ? "80px" : "auto")};
    border-radius: 6px;
    border:0;
    color:#54626C;
    &:hover{  
        background-color :#999;
        color : #fff
    }
`;

const Checkbox = ({color, size}) => (
    <StyledCheckbox checked/>
)

export default Checkbox