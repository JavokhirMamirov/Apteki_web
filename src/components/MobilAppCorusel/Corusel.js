import styled from "styled-components";
import Carousel from 'react-elastic-carousel';


export const Slider = styled(Carousel)`
    .rec.rec-arrow {
    background-color:#71A221;
    color: white;
    }
    padding: 50px;
    .rec.rec-dot {
    background: rgba(111, 162, 28, 0.5);
    box-shadow:none;
    height: 15px;
    width: 15px;
    }
    .rec.rec-dot.rec-dot_active {
        background-color: #6FA21C;
    }
    @media (max-width:420px){
        padding: 20px 10px;
        .rec.rec-arrow {
        height: 40px;
        min-width: 40px;
        font-size: 16px;
        line-height: 42px;
    } 
    }
    
`;

 export const Item = styled.img`

    @media (max-width:420px){
        height:400px;
        width: 220px;
    } 

 `;