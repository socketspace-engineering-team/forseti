import React, {useState, useEffect} from 'react'
import { menuData } from '../data/MenuData'
import styled, {css} from 'styled-components/macro';
import {Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
import Navbarlogo from '../images/logo/logo.png';

const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 50px;
    z-index: 100;
    position: fixed;
    width: 100%;
    transition: 0.5s ease-out;
    @media screen and (max-width: 768px){
        padding: 0;
    }
`;

const NavItem = styled.div`
    height: 80px;
`

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

`;

const Logo = styled(LinkR)`
    ${NavLink}
    font-style: italic;

    img{
        width: 50%;
    }
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        margin-top: 20px;
        margin-right: 20px;
        top: 0;
        font-size: 1.8rem;
        
        cursor: pointer;
        color: #fff
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(LinkS)`
    ${NavLink}
    &.active {
        border-bottom: 3px solid #68b7c7;
        color: #68b7c7;
    }
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <Nav scrollNav={scrollNav}>
            <Logo to="/">
                <img src={Navbarlogo} alt="Forseti Logo" />
            </Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) =>  (
                    <NavItem key={index}>
                        <NavMenuLinks 
                        offset={-80}  
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true" 
                        to={item.link} 
                        >
                            {item.title}
                        </NavMenuLinks>
                    </NavItem>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/" primary='true'>
                    Coming Soon
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
