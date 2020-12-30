import React from 'react';
import styled from 'styled-components';

const Members = () => {

    return (
        <>
            <MemberHeader>
                <h1>Members</h1>
            </MemberHeader>

            <MemberAlbum>
                <img src="./images/image_1.jpg" alt="members face"/>
                <img src="./images/image_2.jpg" alt="members face"/>
                <img src="./images/image_3.jpg" alt="members face"/>
                <img src="./images/image_4.jpg" alt="members face"/>
                <img src="./images/image_5.jpg" alt="members face"/>
                <img src="./images/image_6.jpg" alt="members face"/>
                <img src="./images/image_7.jpg" alt="members face"/>
                <img src="./images/image_8.jpg" alt="members face"/>
                <img src="./images/image_9.jpg" alt="members face"/>
                <img src="./images/image_10.jpg" alt="members face"/>
            </MemberAlbum>
            
        </>
    )
}

export default Members;


const MemberHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 88px;


    h1 {
        font-size: 8.125rem;
        font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
        letter-spacing: 1.4rem;
        text-transform: uppercase;
        text-align: center;
        color: #696969;
        margin-bottom: 80px;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 6rem;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 3rem;
            letter-spacing: .7rem;
        }
    }
`

const MemberAlbum = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;

    img {
        width: 280px;
        height: 280px;

        @media (max-width: 768px) {
            width: 150px;
            height: 150px;
        }
    }
`;