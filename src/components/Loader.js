import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
    const loading = keyframes`
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
    `;

    const LoaderStyle = styled.div`
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        

        .loader {
            width: 50px;
            height: 50px;
            border-radius:50%;
            border: 5px solid #fff;
            border-top-color: green;
            animation: ${loading} .5s linear infinite;
        }
    `;
    
    return (
        <LoaderStyle className="overlay">
            <div className="loader"></div>
        </LoaderStyle>
    );
}

export default Loader;