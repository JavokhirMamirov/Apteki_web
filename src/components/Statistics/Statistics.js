import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #6FA21C;
    flex-direction: column;
    align-items: center;
`;

export const StTitle = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 500;
    padding:30px;
`;
export const StContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media (max-width:440px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const StItemContainer = styled.div`
    padding-bottom: 20px;
    /* padding: 10px 100px; */
`;
export const StData = styled.p`
    color: white;
    font-size: 30px;
    font-weight: 500;
    margin: 10px;
`;
export const StDataTitle = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin: 10px;
`;