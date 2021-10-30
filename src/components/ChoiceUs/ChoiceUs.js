import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: #FBFBFB;
    @media (max-width:768px){
        display: flex;
        flex-direction: column;
    }
`;

export const VideoContainer = styled.div`
    display: flex;
`;
export const YoutubeImage = styled.img`
    width: 100%;
    height: 400px;
`;
export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const Title = styled.p`
    color: #6FA21C;
    font-size: 25px;
`;

export const IconBlock = styled.div`
    display: flex;
    background: linear-gradient(51.09deg, #6FA21C 15.56%, #A7ED36 89.93%);
    min-width: 61px;
    min-height: 61px;
    max-width: 61px;
    max-height: 61px;
    border-radius: 50%;
    margin:10px;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 90%;
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
    }
`;
export const InfoItem = styled.div`
    display: flex;
    flex-direction: row;
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ItemTitle = styled.p`
    font-size: 16px;
    margin: 5px;
    color: black;
    font-weight: 600;
`;
export const ItemSubTitle = styled.p`
    font-size: 12px;
    margin: 5px;
`;