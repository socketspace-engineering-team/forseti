import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Header, Border } from '../TitleSubtitle';
import PartnerSVG from '../../images/partner/partner-illustration.svg';
import Aos from 'aos';
import "aos/dist/aos.css";

const PartnerContainer= styled.div`
    color: #fff;
    align-items: center;
    background : #010606;
    padding: 48px 80px;

    @media screen and (max-width: 768px){
        padding: 20px 0;
    }
`;

const PartnerContent = styled.div`
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

const PartnerImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
    margin-bottom: 0.5em;
`;

const PartnerImg = styled.img`
    width: 100%;
`;

const PartnerRow = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns : 1fr;
        padding: 0 0;
    }
`;

const PartnerDescription = styled.p`
    color: #fff;
    text-align: center;
    font-size: 18px;
    margin-bottom: 1em;
`;

const PartnerLogo = styled.img`
    justify-self: center;
    max-width: 100%;
`;

const Partner = ({Partners}) => {
    useEffect(() => {
        Aos.init({
        });
    }, [])
    return (
        <PartnerContainer id="partner">
            <PartnerContent>
                <Header data-aos="fade-up" data-aos-duration="3000" data-aos-delay="750">
                    Our Partner
                </Header>
                <Border data-aos="flip-left" data-aos-duration="3000" data-aos-delay="750"></Border>
                <PartnerImgWrapper data-aos="fade-left" data-aos-duration="3000" data-aos-delay="750">
                    <PartnerImg src={PartnerSVG}/>
                </PartnerImgWrapper>
                <PartnerDescription data-aos="fade-up" data-aos-duration="3000" data-aos-delay="750">
                    FORSETI memiliki tujuan menggunakan teknologi block-chain untuk menghadirkan peluang besar bagi komunitas kami. Tujuan kami adalah menjadi salah satu
                    dari beberapa komunitas token yang bermartabat. Kami berkomitmen untuk menghadirkan produk nyata, bernilai tinggi dan sustainability kepada komunitas dan partner.
                </PartnerDescription>
                <PartnerRow>
                {Partners.map((Partner,index) => {
                    return (
                        <PartnerLogo key={index} src={Partner.img} data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000"/>
                    )
                }
                )}
                </PartnerRow>
            </PartnerContent>
        </PartnerContainer>
    )
}

export default Partner
