import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 800px;
    max-height: 1200px;
    background-color: #6FA21C;
    margin-top: -16px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    align-items:center;
    width: 100%;

`;

export const ContentTitle = styled.p`
    font-size: 30px;
    color: white;
    font-weight: bold;
    
`;
export const TextContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    padding-left: 20%;
    grid-column-gap:50px;
`;
export const ContentImage = styled.img`
    size: cover;
    padding-left:50px;
    @media screen and (max-width:1250px){
        width: 620px;
        height: 400;
    }
    @media screen and (max-width:900px){
        width: 420px;
        height: 200;
    }

`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Button = styled(ReactRouterLink)`
    display: block;
  background-color: ${props=>props.color};
  width: 30%;
  color: white;
  border-radius: 15px;
  border: 0;
  font-size: 20px;
  padding: 8px 17px;
  cursor: pointed;
  text-decoration: none;
  text-align: center;
`;