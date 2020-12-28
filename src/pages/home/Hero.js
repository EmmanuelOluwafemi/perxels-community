import React from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import styled from 'styled-components';

const Hero = () => {
    const HeroStyle = styled.div`
        height: 100%;
        min-height: 100vh;
    `;

    const HeroContentStyle = styled.div`
        height: 100%;
        min-height: 73vh;
        display: flex;
        align-items: center;
    `;

    const HeroImage = styled.img`
        width: 80%;
        height: auto;
        margin: 0 auto;

        @media (max-width: 768px) {
            width: 60%;
        }
    `;

    const HeroHeading = styled.h1`
        font-size: 4rem;
        font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
        color: #333333;

        @media (max-width: 768px) {
            font-size: 2.7rem;
            line-height: 1;
            margin-top: 32px;
        }
    `;

    const HeroParagraph = styled.p`
        font-size: 1.25rem;
        font-family: ProximaRegular, "Helvetica", "Arial", sans-serif;
        color: #696969;
        margin-bottom: 30px;

        @media (max-width: 768px) {
            text-align: center;
            margin-top: 16px;
        }
    `;

    return (
        <HeroStyle>
            <div className="container">
                <Header />
                <HeroContentStyle>
                    <div className="row align-items-center">
                        <div className="col-md-6 order-2 order-md-1">
                            <HeroHeading className="text-center text-md-left">Make friends & Grow your network</HeroHeading>
                            <HeroParagraph>Connect with the big guys in the UIUX industry and get access to big gigs while you have fun.</HeroParagraph>
                            <Button />
                        </div> 
                        <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center justify-content-md-start">
                            <HeroImage className="img-fluid" src="./images/header-image.png" alt="Perxels community Illustration"/>
                        </div>               
                    </div>
                </HeroContentStyle>
            </div>
        </HeroStyle>
        
    )
}


export default Hero;