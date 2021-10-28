import styled from "styled-components";

export const Container = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.p`
    padding: 20px;
    font-size: 20px;
    color: #6FA21C;
    text-transform: uppercase;
    font-weight: 500;
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns:33% 33% 33%;
    column-gap: 20px;
    row-gap: 20px;
    padding: 20px;
    padding-bottom: 60px;
    @media (max-width:1025px){
        grid-template-columns:50% 50%;
    }
    @media (max-width:665px){
        grid-template-columns:100%;
    }
    
`;

export const CardItem = styled.div`
    display: flex;
    width: 305px;
    height: 320px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #eeeeee;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 2px 2px 2px #B4B4B4;
`;

export const IconBlock = styled.div`
    display: flex;
    background: linear-gradient(51.09deg, #6FA21C 15.56%, #A7ED36 89.93%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin:15px;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const CardTitle = styled.p`
    color: black;
    font-size: 16px;
    font-weight: 500;
`;
export const CardSubTitle = styled.p`
    color: #B4B4B4;
    font-size: 14px;
    text-align:center;
    padding: 10px;
`;