import React from 'react';
import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const Events = () => {
    return (
        <>
            <EventHeader>
                <h1>events<span>& meet ups</span></h1>
            </EventHeader>
            <Swiper
            spaceBetween={5}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="slide-card">
                        <img src="./images/graduation.jpg" alt=""/>
                        <div className="slide-content">
                            <h4></h4>
                            <p></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-card">
                        <img src="./images/slide_2.jpg" alt=""/>
                        <div className="slide-content">
                            <h4></h4>
                            <p></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-card">
                        <img src="./images/slide_3.png" alt=""/>
                        <div className="slide-content">
                            <h4></h4>
                            <p></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-card">
                        <img src="./images/slide_4.jpg" alt=""/>
                        <div className="slide-content">
                            <h4></h4>
                            <p></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
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