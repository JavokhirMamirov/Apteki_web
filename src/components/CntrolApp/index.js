import React from 'react'
import { Container, Title, SubTitle } from './ControlApp';
import AppCorusel from '../MobilAppCorusel';

const ControlApp = () => {
    return (
        <Container>
            <Title>Apteki App</Title>
            <SubTitle>Biznesingizni Mobil Ilova Orqali Boshqaring</SubTitle>
            <AppCorusel/>
        </Container>
    );
}

export default ControlApp;