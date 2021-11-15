import React, {useEffect} from 'react';
import styled from 'styled-components'
import { Header,Border } from '../TitleSubtitle';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import shuttle from '../../images/roadmap/astronaut.png';
import team2 from '../../images/roadmap/illustration6.svg';
import { motion } from 'framer-motion';
import Aos from 'aos';
import "aos/dist/aos.css";

const RoadmapContainer = styled.div`
    color: #fff;
    align-items: center;
    background-image: linear-gradient(to bottom, #010606 , #023047, #010606);
    border-style: solid;
    border-width: 0 0 2px ;
    border-image: linear-gradient(90deg, #68b7c7, #317481) 1;
    @media screen and (max-width: 768px){
        padding-top: 20px;
    }
`;

const RoadmapContent = styled.div`
    max-width: 1200px;
    padding: 48px 80px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 768px){
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        padding : 48px 0;
    }
`;

const TimelineDate = styled.h3`
    color : #317481;
    float : right;
    text-align: left;
    margin-right: 1em;
    margin-left: 1em;
`;

const TimelineDescription = styled.div`
    color : #fff;
    margin-left: 1em;
    font-size: 18px;
`;

const RoadmapIllustrationWrapper= styled(motion.div)`
    z-index : 5;
    max-width: 400px;
    top: 40%;
    left: 0;
    height: 100%;
    position: absolute;
`;

const RoadmapIllustration = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    @media screen and (max-width: 768px){
        opacity : 0.35;
    }
`;

const RoadmapIllustrationWrapper2= styled.div`
    width: 100%;
    bottom: 0;
    opacity : 0.35;
    position: absolute;
`;

const RoadmapIllustration2 = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

const RoadmapIllustrationWrapper3= styled.div`
    width: 100%;
    top: 2;
    opacity : 0.35;
    position: absolute;
`;

const RoadmapIllustration3 = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`;

function Roadmap({Roadmaps}) {
    useEffect(() => {
        Aos.init({
        });
    }, [])
    return (
        <RoadmapContainer id="roadmap">
           <RoadmapContent>
                <Header data-aos="fade-up">
                    Road Map
                </Header>
                <Border data-aos="flip-left"></Border>
                <RoadmapIllustrationWrapper initial={{y:0}}
                        animate={{y: -10 }}
                        transition={{duration: 1, 
                            repeat: Infinity,
                            repeatType : "mirror",}}>
                    <RoadmapIllustration src={shuttle}/>
                </RoadmapIllustrationWrapper>

                <RoadmapIllustrationWrapper2>
                    <RoadmapIllustration2 src={team2}/>
                </RoadmapIllustrationWrapper2>

                <RoadmapIllustrationWrapper3>
                    <RoadmapIllustration3 src={team2}/>
                </RoadmapIllustrationWrapper3>
                <Timeline lineColor={'#317481'}>
                {Roadmaps.map((Roadmap, index) => {
                    return (
                        <TimelineItem
                            key={index}
                            style={{ zIndex:'99', color: '#317481', fontSize: '21px' }}
                            dateComponent={(
                                <TimelineDate>{Roadmap.date}</TimelineDate>
                            )}
                            bodyContainerStyle={{
                                background: 'transparent',
                                border: 'solid 2px #317481',
                                padding: '15px',
                                borderRadius: '8px',
                                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            }}
                            animate={ false}
                            >
                            {/* <TimelineSubtitle>{Roadmap.subtitle}</TimelineSubtitle> */}
                            <TimelineDescription>{Roadmap.list}</TimelineDescription>
                        </TimelineItem>
                    )
                })}
                </Timeline>
                
            </RoadmapContent>
            
            </RoadmapContainer>
    )
}

export default Roadmap
