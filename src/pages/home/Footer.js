import React from 'react';
import Styled from 'styled-components';

import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <FooterStyle className="d-flex flex-column justify-content-center align-items-center footer py-5">
            <p>Copyright © 2020 Perxels</p>
            <div className="icons">
                <Link className="icon"><i class="fab fa-twitter"></i></Link>
                <Link className="icon"><i class="fab fa-linkedin-in"></i></Link>
                <Link className="icon"><i class="fab fa-instagram"></i></Link>
            </div>
        </FooterStyle>
    );
}

export default Footer;

const FooterStyle = Styled.footer`
    background: #1DB6BC;
    margin-top: 80px;
    color: #fff;
    font-size: 1.5rem;

    .icons {
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        text-decoration: none;

        .icon {
            background: #fff;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #1DB6BC;

            &:hover { 
                color: #1DB6Bf;
            }

            i {
                font-size: 1.3rem;
            }
        }
    }
`;