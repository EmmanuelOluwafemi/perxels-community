import React from 'react';
import styled from 'styled-components';

import './events.css';

const Events = () => {
    return (
        <>
            <EventHeader>
                <h1>events<span>& meet ups</span></h1>
            </EventHeader>
            
        </>
    )
}

export default Events


const EventHeader = styled.div`
    display: flex;
    justify-content: center;


    h1 {
        font-size: 8.125rem;
        font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
        letter-spacing: 2rem;
        text-transform: uppercase;
        text-align: center;
        color: #696969;
        margin-bottom: 80px;

        span {
            display: block;
            font-size: 4.3125rem;
            letter-spacing: 0.5rem;
            text-transform: capitalize;
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 6rem;

            span {
                font-size: 3rem;
            }
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 3rem;
            letter-spacing: 1.4rem;

            span {
                font-size: 2rem;
            }
        }
    }
`