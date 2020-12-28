import React, { useState } from 'react';
import styled from 'styled-components';
import Styled from 'styled-components';

const Header = () => {

    const [toogle, setToogle] = useState(false);

    const NavStyle = Styled.nav`
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul {
            display: flex;
            height: 100%;
            align-items: center;
            list-style: none;

            li {
                margin-left: 40px;
                font-size: 24px
                font-weight: regular;

                a {
                    color: #777777;
                    
                    :hover {
                        color: #1DB6BC;
                        text-decoration: none;
                    }

                    .active {
                        color: #1DB6BC;
                    }

                }

                &.roundedBtn {
                    height: 60px;
                    width: 190px;
                    border-radius: 50px;
                    background: #1DB6BC;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    a {
                        color: white;
                    }
                }
            }
        }

        @media (max-width: 768px) {
            ul {
                position: absolute;
                top: 100%;
                right: 0;
                display: block;
                width: 300px;
                height: 100%;
                min-height: 500px;
                background: #fff;
                z-index: 2;
                opacity: 0;
                transform: scale(0);
                transform-origin: right;
                transition: all .4s ease;

                &.active {
                    display: block;
                    opacity: 1;
                    transform: scale(1);
                }
            }

          }
    `;

    const NavIconStyle = styled.i`
        display: none;

        @media (max-width: 768px) {
            display: block;
            font-size: 24px;
            cursor: pointer;
        }
    `;

    const handleOnclick = () => {
        setToogle(!toogle);
    }

    return (
        <NavStyle>
            <div className="logo"><img src="./images/logo.jpg" alt="Perxels community logo"/></div>
            <ul className={toogle && 'active'}>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Member</a></li>
                <li className="roundedBtn"><a href="#">Join Now</a></li>
            </ul>
            <NavIconStyle onClick={handleOnclick} className={toogle ? 'fas fa-times' : 'fas fa-bars'}> </NavIconStyle>
        </NavStyle>
    )
}


export default Header;