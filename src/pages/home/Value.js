import React from 'react';
import styled from 'styled-components';

const Value = () => {
    return (
        <>
            <ValueStyle>
                <div className="container">
                    <div className="row align-items-center mx-0 mx-md-3 py-4 py-md-0">
                        <div className="col-md-6 text-center text-md-left pr-0 pr-md-5 order-2 order-md-2 mt-5 mt-md-0">
                            <ValueParagraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam.
                            </ValueParagraph>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                                <ValueHeading>CORE</ValueHeading>
                                <ValueSubHeaading>VALUES</ValueSubHeaading>
                        </div>
                    </div>
                </div>
            </ValueStyle>
            <ValueGrid>
                <div className="container">
                    <div className="row mx-3">
                        <div className="col-md-6 col-lg-4">
                            <ValueCard>
                                <img className="img-fluid" src='./images/vision.svg' alt="Our Vision"/>
                                <h1>vision</h1>
                                <p>To create a massive network of UI/UX designers 
                                    while engaging each other with beneficial 
                                    activities and exposure needed 
                                    to thrive in the design world.
                                </p>
                            </ValueCard>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <ValueCard>
                                <img src='./images/mission.svg' alt="Our Mission"/>
                                <h1>mission</h1>
                                <p>To develop strong ties between the Perxels 
                                    Alumni and UI/UX designers around the world 
                                    by providing amazing benefits.
                                </p>
                            </ValueCard>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <ValueCard>
                                <img src='./images/goal.svg' alt="Our Vision"/>
                                <h1>goal</h1>
                                <p>To create a massive network of UI/UX designers 
                                    while engaging each other with beneficial 
                                    activities and exposure needed 
                                    to thrive in the design world.
                                </p>
                            </ValueCard>
                        </div>
                    </div>
                </div>
            </ValueGrid>
        </>
    )
}

export default Value;


const ValueStyle = styled.div`
    min-height: 400px;
    background-color: rgba(227, 83, 113, 0.03);
    display: flex;
    align-items: center;
`;

const ValueHeading = styled.h2`
    font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
    font-size: 148px;
    line-height: 180px;
    color: #333333;
    letter-spacing: 2.6rem;

    @media (max-width: 1200px) {
        font-size: 7rem;
    }

    @media (max-width: 1000px) {
        font-size: 4rem;
    }

    @media (max-width: 768px) {
        text-align: left;
        font-size: 5.5rem;
        line-height: 100px;
    }

    @media (max-width: 480px) {
        text-align: left;
        font-size: 4rem;
    }
`;

const ValueSubHeaading = styled.h3`
    font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
    font-size: 86px;
    line-height: 0.4;
    color: #333333;
    letter-spacing: 2.3rem;
    transform: rotateY(180deg);

    @media (max-width: 1200px) {
        font-size: 4rem;
    }

    @media (max-width: 1000px) {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        text-align: left;
        font-size: 3rem;
        transform: rotateY(0);
    }

    @media (max-width: 480px) {
        text-align: left;
        font-size: 2rem;
    }
`

const ValueParagraph = styled.p`
    color:rgba(0, 0, 0, 0.88);
    font-size: 28px;
    font-family: ProximaRegular, "Helvetica", "Arial", sans-serif;
    line-height: 2;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        line-height: 1.8;
        text-align: left;
    }
`

const ValueGrid = styled.div`
    margin: 80px 0;
`

const ValueCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33px;
    height: 380px;
    cursor: pointer;

    h1 {
        font-size: 28px;
        font-family: ProximaRegular, "Helvetica", "Arial", sans-serif;
        text-transform: uppercase;
        letter-spacing: .8rem;
        margin-top: 28px;
        margin-bottom: 11px;
    }

    p {
        text-align: center;
        font-family: ProximaRegular, "Helvetica", "Arial", sans-serif;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.88);
    }

    &:hover {
        background: #FFFFFF;
        box-shadow: 0px 7px 55px #F2F9FA;
        border-radius: 9px;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`