import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Header, Border } from '../TitleSubtitle';
import Aos from 'aos';
import "aos/dist/aos.css";

const GrowContainer = styled.div`
    color: #fff;
    align-items: center;
    background : ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    border-style: solid;
    border-width: 0 0 2px ;
    border-image: linear-gradient(90deg, #68b7c7, #317481) 1;
    @media screen and (max-width: 768px){
        padding-top: 50px;
    }
`;

const GrowDescription = styled.p`
    font-size: 18px;
    font-weight: 500;
    text-align: center;
`

const GrowContent = styled.div `
    max-width: 1500px;
    padding: 48px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 768px){
        padding: 50px 30px;
    }
`;

const GrowRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col2 col2' 'col1 col1';
    }
`;

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

const GrowImageWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

const GrowImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;


const Grow = ({Grows}) => {
    useEffect(() => {
        Aos.init({
        });
    }, [])
    return (
        <GrowContainer id="grow">
            <GrowContent>
                <Header data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
                    How We Grow 
                </Header>
                <Border data-aos="flip-left" data-aos-duration="3000" data-aos-delay="500"></Border>
                {Grows.map((Growdata, index) => {
                    return (
                    <GrowRow key={index}>
                        <Column1 data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500">
                            <GrowDescription>
                                {Growdata.description}
                            </GrowDescription>
                        </Column1>    
                        <Column2 data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500">
                            <GrowImageWrapper>
                                <GrowImg src={Growdata.img} />
                            </GrowImageWrapper>
                        </Column2>  
                    </GrowRow>
                    )
                })}
            
            </GrowContent>
            
        </GrowContainer>
    )
}

export default Grow
