import React from 'react'
import { Container,StTitle,StContainer,StItemContainer,StData,StDataTitle } from './Statistics';
import CountUp from 'react-countup';

const Statistics = () => {
    return (
        <Container id="statistics">
            <StTitle>APTEKI DASTUR STATISTKASI</StTitle>
            <StContainer>
                <StItemContainer>
                    <StData>
                        <CountUp end={20000} duration={2} separator=" "/>
                    </StData>
                    <StDataTitle>Mahsulotlar</StDataTitle>
                </StItemContainer>
                <StItemContainer>
                    <StData>
                        <CountUp end={10000} duration={2} separator=" "/>
                    </StData>
                    <StDataTitle>Mahsulotlar</StDataTitle>
                </StItemContainer>
                <StItemContainer>
                    <StData>
                        <CountUp end={500} duration={2} separator=" "/>
                    </StData>
                    <StDataTitle>Mahsulotlar</StDataTitle>
                </StItemContainer>
                <StItemContainer>
                    <StData>
                        <CountUp end={30000} duration={2} separator=" "/>
                    </StData>
                    <StDataTitle>Mahsulotlar</StDataTitle>
                </StItemContainer>
            </StContainer>
        </Container>
    );
}

export default Statistics;