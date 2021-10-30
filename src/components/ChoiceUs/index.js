import React, {useState} from 'react'
import { Container, ContentContainer, Title, YoutubeImage, VideoContainer } from './ChoiceUs';
import ModalVideo from '../ModalVideo';
const ChoiceUs = () => {
    const [modal, setModal] = useState(false);

    const openModal = () =>{
        setModal(!modal)
    }



    return (
        <Container>
            <VideoContainer>
                <YoutubeImage onClick={openModal}
                    src="/images/yt.png"
                />
                <ModalVideo modal={modal} setModal={()=>setModal(false)} url="ztF-Mxr3tb8"/>
            </VideoContainer>
            <ContentContainer>
                <Title>Nima uchun bizni tanlaysiz?</Title>
            </ContentContainer>
        </Container>
    );
}

export default ChoiceUs;