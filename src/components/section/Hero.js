import React, {useState, useRef, useEffect} from 'react'
import styled, {css} from 'styled-components/macro'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import Herologo from '../../images/logo/logo-img.png';
import Video from '../../images/hero/video4.mp4';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -4px;
    z-index: 12;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
    width: 100%;
    height: 100%;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 100px;
    justify-content: ${({ justify }) => (justify ? 'left' : 'space-between') };

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
             rgba(0,0,0,0.2) 0%, 
             rgba(0,0,0,0.2) 50%,
             rgba(0,0,0,0.6) 100%)
    }

    @media screen and (max-width: 768px){
        padding: 50px;
    }
`;
const HeroImage = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export const VideoBg = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroText = styled(motion.h1)`
    position: absolute;
    color: #fff;
    font-size: 180px;
    z-index: 10;
    display: flex;
    opacity: 0.1;
    margin-left: 300px;
    @media screen and (max-width: 1024px){
        font-size: 180px;
        margin-left: 0;
    }
    @media screen and (max-width: 962px){
        font-size: 100px;
    }
    @media screen and (max-width: 540px){
        bottom: 0;
    }
    @media screen and (max-width: 320px){
        bottom: 0;
        font-size: 60px;
    }
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 14;
    display: flex;
    flex-direction: column;
    align-items: ${({ align }) => (align ? 'left' : 'center') };
    max-width: 366px;
    color: #fff;

`;

const Quotes = styled(motion.h1)`
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: capitalize;
    text-shadow: 0px 0px 20px rgba(0,0,0, 0.4);
    text-align: ${({left}) => (left ? 'left' : 'center')};
    margin-bottom: 0.8rem;
`;

const Author = styled(motion.p)`
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0, 0.4);
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 20px;
    right: auto;
    display: flex;
    z-index: 20;
    @media screen and (max-width: 962px){
        right: 20px;
    }

    @media screen and (max-width: 962px){
        left: 20px;
    }
`;

const LogoWrapper = styled(motion.div)`

`

const Forsetilogo = styled(motion.img)`
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    width: 200px;
    border: 2px solid transparent;
    border-radius: 50%;
    box-shadow:   0px 0px 11px 3px #317481;
`;

const Motto = styled(motion.h2)`
    font-weight: 400;
    text-shadow:
      0 0 21px #317481,
      0 0 100px #317481;
`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #E8F0F2;
    cursor: pointer;
    background: #131313;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #317481;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

// Animation 
const slidingAnimation = {
    beginSlide : {
        opacity: 0,
    },
    endSlide : {
        opacity: 1,
        transition: {
            duration : 1
        }
    },
    exit : {
        y:-1000,
        transition: {
            duration: 1
        }
    }
}

const logoAnimation = {
    begin : {
        opacity:0, 
        y:-300
    },
    end : {
        opacity:1, 
        y:0,
        transition: {
            duration: 2,
        },
    }
}

const sentence = {
    hidden : {opacity : 0.3},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
}

const letter = {
    hidden: { opacity: 0, x:-20, y:-20  },
    visible: {
        opacity: 0.5,
        rotateY: 360,
        x:0,
        y:0,
        transition: {
            repeat: Infinity,
            repeatType : "mirror",
            duration : 2,
        }
    },
}


// Slide Functionality
function Hero({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length; 
    const timeout = useRef(null);

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current ===length - 1 ? 0 : current + 1))
    //     }

    //     timeout.current = setTimeout(nextSlide, 15000)

    //     return function () {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current);
    //         }
    //     }
    // }, [current, length])

    const nextSlide = () => {
    if(timeout.current) {
        clearTimeout(timeout.current);
    }
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
    if(timeout.current) {
        clearTimeout(timeout.current);
    }
        setCurrent(current === 0 ? length -1 : current -1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    const companyName ="Forseti"

    if (current === length-length){
        return (
            <HeroSection>
                <HeroWrapper>
                    <HeroSlide>
                        <HeroSlider>
                            <HeroText
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                            >
                                
                                {companyName.split("").map((char, index) => {
                                    
                                    return (
                                        <motion.span key={char + "-" + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    )
                                })}
                            </HeroText>
                            <VideoBg autoPlay loop muted src={Video} 
                            type='video/mp4'/>
                            {/* <HeroImage 
                            transition={{duration:1}}
                            variants ={slidingAnimation} 
                            initial ="beginSlide" 
                            animate="endSlide"
                            src={IntroBg} /> */}
                            <HeroContent >
                                <Quotes 
                                transition={{duration:1}}
                                variants ={slidingAnimation} 
                                initial ="beginSlide" 
                                animate="endSlide"
                                >
                                </Quotes>
                            </HeroContent>
                            <HeroContent>
                                <LogoWrapper
                                variants={logoAnimation}
                                initial="begin" 
                                animate="end">
                                    <Forsetilogo
                                    initial={{y:0}}
                                    animate={{rotateY: 360, y: -25 }}
                                    transition={{delay: 3, duration: 3, 
                                        repeat: Infinity,
                                        repeatType : "mirror",}}
                                    
                                    src={Herologo} />
                                </LogoWrapper>
                                
                                    <Motto 
                                    
                                    variants ={slidingAnimation} 
                                    initial ="beginSlide" 
                                    animate="endSlide"
                                    >"Future Humanity Shield"
                                    </Motto>
                            </HeroContent>
                        </HeroSlider>
                    </HeroSlide>
                {/* <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons> */}
                
                </HeroWrapper>
                <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#010606" fillOpacity="0.6" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,154.7C840,160,960,224,1080,250.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                </Wave>
            </HeroSection>
        )
    }
    // return (
    //     <HeroSection>
    //         <HeroWrapper>
    //         {slides.map((slide, index) => {
    //             return (
    //                 <HeroSlide key={index}>
    //                     <AnimatePresence>
    //                     {index === current && (
    //                     <HeroSlider justify='true'>
    //                         <HeroImage 
    //                         variants ={slidingAnimation} 
    //                         initial ="beginSlide" 
    //                         animate="endSlide"
    //                         exit="exit"
    //                         src={slide.image} alt={slide.alt}/>
    //                         <HeroContent align='true'>
    //                             <Quotes 
    //                             left="true" 
    //                             variants ={WordAnimation} 
    //                             initial ="begin" 
    //                             animate="end"
    //                             exit="exit">
    //                                 {slide.quotes}
    //                             </Quotes>
    //                             <Author 
    //                             variants ={WordAnimation} 
    //                             initial ="begin" 
    //                             animate="end"
    //                             exit="exit">{slide.author}</Author>       
    //                         </HeroContent>
    //                     </HeroSlider>
    //                     )}
    //                     </AnimatePresence>
    //                 </HeroSlide>
    //             );
    //         })};
    //             <SliderButtons>
    //                 <PrevArrow onClick={prevSlide}/>
    //                 <NextArrow onClick={nextSlide}/>
    //             </SliderButtons>
    //         </HeroWrapper>
    //         <Wave>
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    //             <path fill="#010606" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,154.7C840,160,960,224,1080,250.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    //         </Wave>
    //     </HeroSection>
    // )
}

export default Hero
