import React from 'react';
import Styled from 'styled-components';

const Button = () => {

    const MainButton = Styled.button`
        height: 60px;
        width: 190px;
        border-radius: 50px;
        background: #1DB6BC;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: none;
        outline: none;
    `;

    return (
        <MainButton className="roundedBtn">Join Now</MainButton>
    )
}


export default Button;