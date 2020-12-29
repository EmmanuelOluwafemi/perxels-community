import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom'

const About = () => {
    

    return (
        <AboutStyle className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <AboutHeading>About</AboutHeading>
                    </div>
                    <AboutContent className="col-md-6">
                        <p>The Perxels fellowship is an offspring of Perxels Community. 
                        It is a fellowship made up of top class designers that have come 
                        together to share their insights, stories and resources which 
                        contribute significantly to their design journeys.</p>
                        <Link to="/">Read More</Link>
                    </AboutContent>
                </div>
            </div>
        </AboutStyle>
    );
}

const AboutStyle = styled.div`
        margin: 90px 0;
    `;

    const AboutHeading = styled.h1`
        font-size: 10rem;
        font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
        color: #E35371;
        text-transform: uppercase;

        @media (max-width: 1200px) {
            font-size: 8rem;
            margin: 0 0;
        }

        @media (max-width: 1000px) {
            font-size: 6.2rem;
            margin: 0 0;
        }

        @media (max-width: 768px) {
            font-size: 4rem;
        }
    `;

    const AboutContent = styled.div`
        font-size: 1.75rem;
        font-family: ProximaRegular, "Helvetica", "Arial", sans-serif;
        line-height: 1.2;
        p {
            color: rgba(0, 0, 0, .8);
        }

        a {
            color: #E35371;
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            font-size: 1.5rem;
            line-height: 1.7;
        }
    `;

export default About;