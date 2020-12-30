import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import './events.css';

const Events = () => {

    const settings = {
        arrows: true,
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 6000,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
              }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    dots: true,
                    arrows: true,
              }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true,
                    arrows: true,
              }
            }
        ]
    };

    return (
        <>
            <EventHeader>
                <h1>events<span>& meet ups</span></h1>
            </EventHeader>

            <Slider {...settings}>
                <div className="slide-content">
                    <img className="img-fluid" src="./images/graduation.jpg" alt="events slides"/>
                    <div className="overlay"></div>
                    <div>
                        details
                    </div>
                </div>
                <div className="slide-content">
                    <img className="img-fluid" src="./images/slide_2.jpg" alt="events slides"/>
                    <div className="overlay"></div>
                    <div>
                        details
                    </div>
                </div>
                <div className="slide-content">
                    <img className="img-fluid" src="./images/slide_3.png" alt="events slides"/>
                    <div className="overlay"></div>
                    <div>
                        details
                    </div>
                </div>
                <div className="slide-content">
                    <img className="img-fluid" src="./images/slide_4.jpg" alt="events slides"/>
                    <div className="overlay"></div>
                    <div>
                        details
                    </div>
                </div>
            </Slider>
            <Link to="/register"><MainButton> Join Now </MainButton></Link>
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

const MainButton = styled.button`
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
    margin: 0 auto;
    margin-top: 80px;
`;