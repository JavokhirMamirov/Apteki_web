import React, {useState} from 'react'
import { Container, ContentContainer, Title,
     YoutubeImage, VideoContainer,InfoContainer,
     InfoItem, TextContainer, ItemTitle, ItemSubTitle,
     IconBlock } from './ChoiceUs';
import ModalVideo from '../ModalVideo';
import { FaCheck,FaUser, FaCalendar, FaProductHunt } from 'react-icons/fa';
const ChoiceUs = () => {
    const [modal, setModal] = useState(false);

    const openModal = () =>{
        setModal(!modal)
    }



    return (
        <Container id="choice_us">
            <VideoContainer>
                <YoutubeImage onClick={openModal}
                    src="/images/yt.png"
                />
                <ModalVideo modal={modal} setModal={()=>setModal(false)} url="ztF-Mxr3tb8"/>
            </VideoContainer>
            <ContentContainer>
                <Title>Nima uchun bizni tanlaysiz?</Title>
                <InfoContainer>
                    <InfoItem>
                        <TextContainer>
                            <ItemTitle>Title</ItemTitle>
                            <ItemSubTitle>Far far away, behind the word mountains,far from the countries Vokalia</ItemSubTitle>
                        </TextContainer>
                        <IconBlock><FaProductHunt size={32}/></IconBlock>
                    </InfoItem>
                    <InfoItem>
                        <TextContainer>
                            <ItemTitle>Title</ItemTitle>
                            <ItemSubTitle>Far far away, behind the word mountains,far from the countries Vokalia</ItemSubTitle>
                        </TextContainer>
                        <IconBlock ><FaProductHunt size={32}/></IconBlock>
                    </InfoItem>
                    <InfoItem>
                        <TextContainer>
                            <ItemTitle>Title</ItemTitle>
                            <ItemSubTitle>Far far away, behind the word mountains,far from the countries Vokalia</ItemSubTitle>
                        </TextContainer>
                        <IconBlock><FaProductHunt size={32}/></IconBlock>
                    </InfoItem>
                    <InfoItem>
                        <TextContainer>
                            <ItemTitle>Title</ItemTitle>
                            <ItemSubTitle>Far far away, behind the word mountains,far from the countries Vokalia</ItemSubTitle>
                        </TextContainer>
                        <IconBlock><FaProductHunt size={32}/></IconBlock>
                    </InfoItem>
                    <InfoItem>
                        <TextContainer>
                            <ItemTitle>Title</ItemTitle>
                            <ItemSubTitle>Far far away, behind the word mountains,far from the countries Vokalia</ItemSubTitle>
                        </TextContainer>
                        <IconBlock><FaProductHunt size={32}/></IconBlock>
                    </InfoItem>
                    <InfoItem>
                        <TextContainer>
                            <ItemTitle>Title</ItemTitle>
                            <ItemSubTitle>Far far away, behind the word mountains,far from the countries Vokalia</ItemSubTitle>
                        </TextContainer>
                        <IconBlock><FaProductHunt size={32}/></IconBlock>
                    </InfoItem>
                </InfoContainer>
                
            </ContentContainer>
        </Container>
    );
}

export default ChoiceUs;