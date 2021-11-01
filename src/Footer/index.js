import React from 'react'
import { Container, Title, Content, ContentDiv, Text, Button } from './Footer';
import { FaFacebook, FaInstagram, FaMailBulk, FaMap, FaMapMarker, FaPhone, FaTelegram } from 'react-icons/fa';
const Footer = () => {
    return (
        <Container>
            <Content>
                <Title>Manzil</Title>
                <ContentDiv>
                    <FaMapMarker color="#fff" size={26}/>
                    <Text>Andijon viloyati Andijon shahar Boburshox ko'chasi 2 uy</Text>
                </ContentDiv>
            </Content>
            <Content>
                <Title>Telefon raqam</Title>
                <ContentDiv>
                    <FaPhone color="#fff" size={26}/>
                    <Text>+99890 123 45 67</Text>
                </ContentDiv>
            </Content>
            <Content>
                <Title>Email</Title>
                <ContentDiv>
                    <FaMailBulk color="#fff" size={26}/>
                    <Text>info@apteki.uz</Text>
                </ContentDiv>
            </Content>
            <Content>
                <Title>Ijtimoiy tarmoqlar</Title>
                <ContentDiv>
                    <Button>
                     <FaTelegram color="#fff" size={18}/>
                    </Button>
                    <Button>
                     <FaInstagram color="#fff" size={18}/>
                    </Button>
                    <Button>
                     <FaFacebook color="#fff" size={18}/>
                    </Button>
                </ContentDiv>
            </Content>
        </Container>

    );
}

export default Footer;