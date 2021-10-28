import React from 'react'
import { Container, Content, ContentTitle, ContentImage, TextContainer, ButtonContainer, Button } from './Header';
const Header = () => {
    return (
        <Container>
            <Content>
                <TextContainer>
                    <ContentTitle>
                        Dorixona biznesi uchun savdo dasturi.
                    </ContentTitle>
                    <ButtonContainer>
                        <Button to='#' color="#94FF62">Ro'yhatdan o'tish</Button>
                        <Button to='#' color="#304F42">Aloqa</Button>
                    </ButtonContainer>
                </TextContainer>
                <ContentImage src='/images/headerimage.png'/>
            </Content>
        </Container>
    );
}

export default Header;