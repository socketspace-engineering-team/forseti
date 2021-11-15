import styled from "styled-components";
import { Link as LinkS} from "react-scroll";

export const Button = styled(LinkS)`
    background: ${({ primary }) => (primary ? 'transparent' : '#317481') };
    white-space: nowrap;
    outline: none;
    border-radius : 30px;
    opacity: 0.9;
    border: solid 2px #fff;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: ${({big}) => 
    (big ? '16px 40px' : '14px 24px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px':'14px')};
    transition: 0.2s all ease;

    &:hover {
        transform: translateY(-2px);
        opacity: 1;
        box-shadow:
        0 0 1px 1px #fff,
        0 0 3px 3px #317481;
        }
`

