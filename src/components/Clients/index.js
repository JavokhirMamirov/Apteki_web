import React from 'react'
import { Container,Title,SubTitle,ClientContainer,Logo } from './Clients';

const Clients = () => {
    return (
        <Container>
            <Title>Bizning Mijozlar</Title>
            <SubTitle>Far far away, behind the word mountains, far from the countries 
                Vokalia and
             Consonantia, there live the blind texts. Separated they live in</SubTitle>
             <ClientContainer>
                 <Logo src='/images/logo1.png'/>
                 <Logo src='/images/logo2.png'/>
                 <Logo src='/images/logo3.png'/>
                 <Logo src='/images/logo4.png'/>
             </ClientContainer>
        </Container>
    );
}

export default Clients;