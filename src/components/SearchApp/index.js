import React from 'react'
import AppCorusel from '../MobilAppCorusel';
import { Container, SubTitle, Title } from './SearchApp';

const SearchApp = () => {
    return(
        <Container>
            <Title>Apteki Qidiruv dasturi</Title>
            <SubTitle>Bizning dastur orqali  mijozlar  uchun kerakli mahsulot sizning  dorixonangizda
                             mavjudligini bilish imkoniyatiga ega bo’ladi.</SubTitle>
            <AppCorusel/>
        </Container>
    );
}

export default SearchApp;