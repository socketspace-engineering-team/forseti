import React, { useEffect } from 'react';
import { Border } from './TitleSubtitle';
import Aos from 'aos';
import "aos/dist/aos.css";

import styled from "styled-components";

const Card =styled.div`
    background: ${({dark}) => (dark ? 'rgba(0,0,0, 0.7)' : 'rgba(255,255,255, 0.8)')} ;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 30px;
    align-items: center;
    height : ${({large}) => (large ? '300px' : '200px')};
    padding: ${({large}) => (large ? '30px' : '15px' )};
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    overflow-y:auto ;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

const CardH2 = styled.h2`
    font-size: 1rem;
    color: #fff;
    margin-bottom: 10px;
`;

const CardP = styled.p`
    font-size: 1rem;
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
    text-align: center;
`;

export const Cards = ({large, dark, title, description, scrolling, scrollingDuration}) => {
    useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <>
            <Card dark={dark} large={large} data-aos={scrolling} data-aos-duration={scrollingDuration} data-aos-delay="250" data-aos-offset="450" data-aos-mirror="true" data-aos-once="false">
                <CardH2>{title}</CardH2>
                <Border />
                <CardP dark={dark}>{description}</CardP>
            </Card>
        </>
    )
}
