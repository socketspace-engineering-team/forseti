import React, {useEffect} from 'react'
import styled from 'styled-components';
import {Header, Border, Subtitle } from '../TitleSubtitle';
import { FaCheckSquare, FaShoppingBasket } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { Button } from '../Button';
import img from "../../images/background/bg-3.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";

const PuchaseContainer = styled.div`
background-image: url(${img});
    background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
    z-index : 1;
    width: 100%;
    color: #fff;
    @media screen and (max-width: 768px){
        padding: 0 0;
    }
`;

const PuchaseBg = styled.div `
    z-index : -3;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 0 0 5% 5%;
    border-bottom: 1px solid #fff;
    @media screen and (max-width: 768px){
        border-radius: 0 0 0 0;
    }
`;

const TopWave = styled.div`
    margin-top: -4px;
    width: 100%;
    z-index: 200;
`;

const PuchaseContent = styled.div `
    max-width: 1200px;
    padding: 48px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 768px){
        padding: 0px 0px;
    }
`;

const DescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${({center}) => (center ? 'center' : 'flex-start')};
    background-color: rgba(0,0,0, 0.3);
    padding: 25px;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-image: linear-gradient(90deg, #68b7c7, #fff) 1;
    margin-bottom: 2em;
    ul li {
        color: #fff;
    }
    @media screen and (max-width: 768px){
        border: none;
        padding: 15px
    }
`;

const ListItem = styled.ul`
    margin-left: 2.5em;
    margin-bottom: 1em;
    li {
        &:before {
            color: #DAA520;
        }
    }
`;

const Items = styled.li`
    font-size: 18px;
    margin-bottom: 0.3em;
    &:before {
        color: #DAA520;
    }
`;

const DescriptionRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`)};
    }
`;

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: ${({left}) => (left ? 'col2' : 'col1')};
`;

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: ${({left}) => (left ? 'col1' : 'col2')};
`;

const PuchaseCard = styled.div`
    background: rgba(0,0,0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    padding: 15px;
    margin: 0.5em 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    overflow-y:auto ;
`;

const SubtitleCard = styled.h2`
    color: white;
`;

const DescriptionCard = styled.p`
    font-size: 18px;
    margin-bottom: 0.3em;
    color: #fefefe;
`;

const ButtonWrapper = styled.div`
    margin: 0.5em 0;
`;

const Important = styled.span`
    font-weight: ${({large}) => (large ? '700' : '500')};
    font-size: ${({large}) => (large ? '24px' : '21px')};
    color : ${({yellow}) => (yellow ? '#c21e56' : '#68b7c7')};
`;

const PuchaseDescription = styled.p`
    font-size: 21px;
    text-align: center;
`;

const YoutubeWrapper = styled.div`
    overflow: hidden;
    margin: 2em auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px){
    }
`;

const Wave = styled.div`
    bottom: 0;
    left: 0;
    margin-bottom: -0.5em;
    width: 100%;
    z-index: 200;
`;

const Puchase = ({puchases}) => {
    useEffect(() => {
        Aos.init({
        });
    }, [])
    return (
        <PuchaseContainer id="puchases">
            <TopWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180.36068725585938"><path fill="#010606" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </TopWave>
            <PuchaseBg></PuchaseBg>
            <PuchaseContent>
                <Header data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                    Puchase Now
                </Header>
                <Border data-aos="flip-left" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450"></Border>
                <DescriptionWrapper>
                    <Subtitle data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450"><Important large={true}><FaCheckSquare /></Important> Step 1 - Before Pre Sale</Subtitle>
                    <ListItem>
                        <Items data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                           <Important>Purchase $BUSD / $BNB / $USDT / $USDC </Important> on any exchange of your choice
                        </Items>
                        <Items data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                            <Important>Transfer  $BUSD / $BNB / $USDT / $USDC </Important> to your MetaMask or Trust Wallet wallet address from another wallet (e.g. Coinbase or Binance).
                        </Items>
                        <Items data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                            <Important>Wait for the pre-sale to start.</Important>
                        </Items>
                    </ListItem>
                    <Subtitle data-aos="slide-up"><Important large={true}><FaCheckSquare /></Important> Step 2 - Before Pre Sale</Subtitle>
                    <ListItem>
                        <Items data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                           While the sale is live, press the contribute button and input the amount of <Important>$BUSD / $BNB / $USDT / $USDC</Important>
                        </Items>
                        <Items data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                            Confirm the transaction in your wallet.
                        </Items>
                        <Items data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                            Min amount 0.1 BNB
                        </Items>
                        <Items data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                            Max Amount 7 BNB
                        </Items>
                    </ListItem>
                    <Subtitle data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450"><Important large={true}><FaCheckSquare /></Important> Step 3 - After Pre Sale</Subtitle>
                    <ListItem>
                        <Items data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                            Token will distribute to your wallet after the pre-sale
                        </Items>
                    </ListItem>
                </DescriptionWrapper>
                
                <DescriptionWrapper center={true}>
                <Subtitle data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">How To Buy Presale ?</Subtitle>
                    <Border></Border>
                        <PuchaseDescription data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">Tonton Video Dibawah ini untuk mengetahui bagaimana cara melakukan pembelian pre sale</PuchaseDescription>
                        <YoutubeWrapper>
                            <iframe
                            width="50%"
                            height="300"
                            src={`https://www.youtube.com/embed/rokGy0huYEA`}
                            frameBorder="2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            />
                        </YoutubeWrapper>

                    <DescriptionRow>

                        <Column1>
                            <Subtitle data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450"><Important large={true}><AiFillDollarCircle /></Important> Bagaimana Anda Bisa Memaksimalkan Token Forseti Anda ?</Subtitle>
                            <Border ></Border>
                            <PuchaseDescription data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">Public Sale Price 1BNB = 2,000,000 SETI</PuchaseDescription>
                            <PuchaseDescription data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450"><Important large={true}>( 1 SETI = $1 )</Important></PuchaseDescription>
                            <br />
                            <PuchaseDescription data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">Listing Pancake Price 1BNB = 1,800,000 SETI</PuchaseDescription>
                            <PuchaseDescription data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450"><Important large={true}>( 1 SETI = $2 )</Important></PuchaseDescription>
                            <br />
                            <PuchaseDescription data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450"><Important large={true} yellow={true}>(Kenaikan 200 % setelah publik sale )</Important></PuchaseDescription>
                        </Column1>

                        <Column2>
                            <PuchaseCard data-aos="slide-up" data-aos-duration="3000" data-aos-delay="1000" data-aos-offset="450">
                                <SubtitleCard>Pre Sale Launch Pad</SubtitleCard>
                                <Border></Border>
                                <DescriptionCard>
                                    <Important>Price : </Important> 1 BUSD = 500000000 FSC
                                </DescriptionCard>
                                <DescriptionCard>
                                    <Important>Soft Cap : </Important> 400 BUSD
                                </DescriptionCard>
                                <DescriptionCard><Important>Hard Cap : </Important>  1000 BUSD</DescriptionCard>
                                <ButtonWrapper>
                                    <Button to="/"><FaShoppingBasket style={{fontSize: '21px', marginRight: '10px'}} /> BUY PRESALE</Button>
                                </ButtonWrapper>
                                <DescriptionCard><Important>For Sale : </Important> 10000000000</DescriptionCard>
                                <DescriptionCard><Important>Max Contribution : </Important> 7 BNB</DescriptionCard>
                                <DescriptionCard><Important>Min Contribution : </Important> 0.1 BNB</DescriptionCard>
                            </PuchaseCard>
                        </Column2>
                    </DescriptionRow>
                
                </DescriptionWrapper>
                
                
                
            </PuchaseContent>
            <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 64 1440 256"><path fill="#010606" fillOpacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </Wave>
        </PuchaseContainer>
    )
}

export default Puchase

