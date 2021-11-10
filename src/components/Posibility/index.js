import React from 'react'
import { Container, Title,CardContainer,CardItem,IconBlock,CardTitle,CardSubTitle } from './Posibility';
import { FaCheck,FaUser, FaCalendar, FaProductHunt } from 'react-icons/fa';
const Posibility = () => {
    return (
        <Container id="posible">
            <Title>Apteki dasturi imkoniyatlari</Title>
            <CardContainer>
                <CardItem>
                    <IconBlock><FaCheck size={32}/></IconBlock>
                    <CardTitle>Title</CardTitle>
                    <CardSubTitle> Even the all-powerful Pointing has 
no control about the blind texts it is
       an almost unorthographic.</CardSubTitle>
                </CardItem>
                <CardItem>
                    <IconBlock><FaUser size={32}/></IconBlock>
                    <CardTitle>Title</CardTitle>
                    <CardSubTitle> Even the all-powerful Pointing has 
no control about the blind texts it is
       an almost unorthographic.</CardSubTitle>
                </CardItem>
                <CardItem>
                    <IconBlock><FaCalendar size={32}/></IconBlock>
                    <CardTitle>Title</CardTitle>
                    <CardSubTitle> Even the all-powerful Pointing has 
no control about the blind texts it is
       an almost unorthographic.</CardSubTitle>
                </CardItem>
                <CardItem>
                    <IconBlock><FaProductHunt size={32}/></IconBlock>
                    <CardTitle>Title</CardTitle>
                    <CardSubTitle> Even the all-powerful Pointing has 
no control about the blind texts it is
       an almost unorthographic.</CardSubTitle>
                </CardItem>
                <CardItem>
                    <IconBlock><FaCheck size={32}/></IconBlock>
                    <CardTitle>Title</CardTitle>
                    <CardSubTitle> Even the all-powerful Pointing has 
no control about the blind texts it is
       an almost unorthographic.</CardSubTitle>
                </CardItem>
                <CardItem>
                    <IconBlock><FaProductHunt size={32}/></IconBlock>
                    <CardTitle>Title</CardTitle>
                    <CardSubTitle> Even the all-powerful Pointing has 
no control about the blind texts it is
       an almost unorthographic.</CardSubTitle>
                </CardItem>
                
            </CardContainer>
        </Container>
    );
}

export default Posibility;