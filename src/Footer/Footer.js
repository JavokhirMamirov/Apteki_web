import styled from "styled-components";

export const  Container = styled.div`
    display: grid;
    background-color: #6FA21C;
    grid-template-columns: 25% 25% 25% 25%;
    padding: 30px;
    @media (max-width:840px){
        grid-template-columns: 50% 50%;
    }
    @media (max-width:540px){
        grid-template-columns: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;
export const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
`;
export const Text = styled.span`
    font-size: 16px;
    color: white;
    padding-left: 15px;
`;

export const Button = styled.button`
    width: 50px;
    height: 50px;
    background: linear-gradient(89.41deg, #94FF62 0.41%, #62F368 99.5%);
    border-radius: 100px;
    text-align: center;
    border: none;
    margin-right: 15px;
    
`;



