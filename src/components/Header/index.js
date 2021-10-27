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
                        <Button color="#94FF62">Get startted</Button>
                        <Button color="#304F42">Get startted</Button>
                    </ButtonContainer>
                </TextContainer>
                <ContentImage src='/images/headerimage.png'/>
            </Content>
        </Container>
    );
}

export default Header;