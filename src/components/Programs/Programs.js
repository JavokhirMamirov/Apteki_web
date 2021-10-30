import styled from "styled-components";

export const Container = styled.div`
    background-color:#FBFBFB;
    display: flex;
    align-items: center;
    padding: 20px;
    flex-direction: column;
    width: 100%;
`;
 export const TabBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    @media (max-width:610px){
        flex-direction: column;
        align-items: center;
    }
    
 `;

 export const TabBtn = styled.button`
    width: 197px;
    height: 50px;
    border: 1px solid #6FA21C;
    box-sizing: border-box;
    border-radius: 100px;
    cursor: pointer;
    background-color: white;
    color: #6FA21C;
    margin: 20px;
    font-size: 15px;
    &.active{
        background: linear-gradient(85.45deg, #77AD20 0%, #A0E333 98.96%);
        color: white;
    }
 `;

 export const TabPanel = styled.div`
    width: 90%;
    padding: 20px;
    display: grid;
    grid-template-columns:50% 50%;
    column-gap: 20px;
    @media (max-width:610px){
        display: flex;
        flex-direction: column;
    }
 `;

 export const PrImage = styled.img`
    width: 100%;
    margin: 10px;
 `;