import styled from "styled-components";

export const Container = styled.div`
    background-color: #6FA21C;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 35px;
    font-weight: 600;
    color: white;
    margin: 10px;
    margin-top:25px;
`;
export const SubTitle = styled.p`
    margin: 5px;
    color: white;
    font-size: 18px;
    line-height: 25px;
    width: 60%;
    text-align: center;
`;
export const ClientContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding: 30px;
    @media (max-width:747px){
        display: grid;
        grid-template-columns:50% 50%;
    }
    @media (max-width:450px){
        display: grid;
        grid-template-columns:100%;
        align-items: center;
    }
`;
export const Logo = styled.img``;