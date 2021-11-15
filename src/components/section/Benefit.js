import React, {useEffect}from 'react'
import { Cards } from '../Card'
import { Header } from '../TitleSubtitle'
import { Border } from '../TitleSubtitle';
import styled from "styled-components";
import img from "../../images/background/bg-1.jpg"
import Aos from 'aos';
import "aos/dist/aos.css";

const Wave = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: -4px;
    z-index: 1;
`

const BenefitContainer = styled.div`
    background-color: #010606;
    z-index : 1;
    width: 100%;
    position: relative;
    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`;

const BenefitBg = styled.div`
    background-image: url(${img});
    background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
    z-index : -3;
    width: 100%;
    height: 100%;
    position: absolute;
    border-style: solid;
    border-width: 0 0 2px ;
    border-image: linear-gradient(90deg, #68b7c7, #317481) 1;
    @media screen and (max-width: 768px){
        border-radius: 0 0 0 0;
    }
`;

const BenefitContent = styled.div`
    max-width: 1200px;
    padding: 48px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 768px){
        padding: 0 60px;
    }
`;

const Description = styled.p`
    color: #fff;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
`;

const BenefitCards =styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns : ${({large}) => (large ? '1fr 1fr 1fr' : '1fr 1fr 1fr 1fr')};
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    grid-gap: 16px;
    padding: 0 50px;
    z-index : 5;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns : 1fr;
        padding: 0 0;
    }
`;

const Benefit = ({benefits, ecosystems}) => {
    useEffect(() => {
        Aos.init({
        });
    }, [])
    return (
        <>
            <BenefitContainer>
                <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#010606" fillOpacity="0.1" d="M0,256L60,234.7C120,213,240,171,360,133.3C480,96,600,64,720,85.3C840,107,960,181,1080,218.7C1200,256,1320,256,1380,256L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                    </path>
                </svg>
                </Wave>
                <BenefitBg>
                </BenefitBg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180.36068725585938"><path fill="#010606" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <BenefitContent id="benefit">
                    <Header data-aos="fade-up">What's The Benefit</Header>
                    <Border data-aos="flip-left">
                    </Border>
                    <BenefitCards large="false">
                    {benefits.map((benefits, index) => {
                        return (
                            <Cards dark={true} scrolling={benefits.animation} scrollingDuration={1000} large={true} key={index} description={benefits.description} title={benefits.icon}/>
                        )
                    })} 
                    </BenefitCards>
                </BenefitContent>
                <BenefitContent id="ecosystem">
                    <Header data-aos="fade-up">Ecosystem</Header>
                    <Border data-aos="flip-left">
                    </Border>
                    <Description data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima similique, ullam in, praesentium repudiandae reprehenderit a sunt eveniet ab dolorum voluptatibus saepe qui repellat earum sint. Debitis, eos provident.</Description>
                    <BenefitCards large="true">
                    {ecosystems.map((ecosystem, index) => {
                        return (
                            <Cards dark={false} scrollingDuration={ecosystem.duration} scrolling={ecosystem.animation} large={false} key={index} description={ecosystem.description} title={ecosystem.icon}/>
                        )
                    })} 
                    </BenefitCards>
                </BenefitContent>
                
            </BenefitContainer>
        </>
    )
}

export default Benefit
