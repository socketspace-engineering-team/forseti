import React from 'react';
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import Footerlogo from '../../images/logo/logo.png';

const FooterContainer = styled.footer`
    background-color: #010606;
`;

const Logo = styled(LinkR)`
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-self: center;
    padding: 0 1rem;
    height: 100%;
    font-size : 28px;
    cursor: pointer;
    text-decoration: none;
    img{
        width: 100%;
    }

    @media screen and (max-width: 820px) {
        display: none;
    }
`;

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width : 820px) {
        padding-top: 32px;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

const FooterLinkTitle = styled.h1`
    font-size : 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(LinkR)`
    color : #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #317481;
        transition: 0.3s ease-out;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>               
                        <Logo to="/">
                            <img src={Footerlogo} alt="Forseti Logo" />
                        </Logo>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Section</FooterLinkTitle>
                            <FooterLink to="">About Us</FooterLink>
                            <FooterLink to="/">Benefit</FooterLink>
                            <FooterLink to="/">Tokenomics</FooterLink>
                            <FooterLink to="/">Road Map</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Instagram </FooterLink>
                            <FooterLink to="/">Facebook </FooterLink>
                            <FooterLink to="/">Twitter </FooterLink>
                            <FooterLink to="/">Youtube </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>        
        </FooterContainer>
    )
}

export default Footer
