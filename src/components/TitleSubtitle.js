import React from 'react';
import styled from "styled-components";

export const TextWrapper = styled.div`
    /* max-width: 540px; */
    padding-top: 0;
    padding-bottom: 60px;
`

export const Description = styled.p`
    color:#fff;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Header = styled.h1`
    margin-bottom: 18px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color:#fff;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    margin-bottom: 12px;
    font-size: 28px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
    text-align : ${({center}) => (center ? 'left' : 'center')};
`;

export const Border = styled.div`
    width: 48px;
    height: 4px;
    margin-bottom: 18px;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    background-image: linear-gradient(180deg, #317481 , #023047);
`;

const TitleSubtitle = () => {
    return (
        <>
        <TextWrapper>
            <Header>
            </Header>
            <Subtitle>
            </Subtitle>
            <Border>
            </Border>
            <Description>
            </Description>
        </TextWrapper>
        </>
    )
}

export default TitleSubtitle
