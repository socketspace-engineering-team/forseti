import React, {Component}from 'react';
import Marquee from "react-easy-marquee";
import styled from 'styled-components';


const TickerFont= styled.p`
    color: #317481;
`;

const TickerTitle = styled.span`
    font-weight: 700;
`;

export default class MoveStuffAround extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             coins: []
        }
    }

    componentDidMount(){
        fetch('https://api.livecoinwatch.com/coins/list', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-api-key': '3d9a8723-9e8a-48b8-8616-6777579ce6ba'
        },
        body: JSON.stringify({
            currency: 'USD',
            sort: 'rank',
            order: 'ascending',
            offset: 0,
            limit: 50,
            meta: false
          })
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState ({
                coins:json
            })
        });
        }
        
    render() {
        const { coins } = this.state
        return (
            <Marquee duration={500000} height="20px" pauseOnHover={true} reverse={true}>
            {coins.map((coin, index)=>(
                <TickerFont key={index}>
                     | <TickerTitle>Code : {coin.code}</TickerTitle>  Volume : {coin.rate} Cap : {coin.cap} Rate : {coin.rate}
                </TickerFont>
            ))}
            </Marquee>
            
        )
    }
}
