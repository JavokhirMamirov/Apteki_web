import React, {useState} from 'react'
import { ItemSubTitle, ItemTitle, TextContainer, Title } from '../ChoiceUs/ChoiceUs';
import { Container, TabBtnContainer, TabBtn, PrImage, TabPanel } from './Programs';
const Programs = () => {

    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <Container>
            <Title>Dasturlar</Title>
            <TabBtnContainer>
                <TabBtn 
                className={activeIndex === 1?"active":""}
                onClick={()=>setActiveIndex(1)}
                >Savdo dasturi</TabBtn>
                <TabBtn 
                className={activeIndex === 2?"active":""}
                onClick={()=>setActiveIndex(2)}
                >Ombor dasturi</TabBtn>
                <TabBtn 
                className={activeIndex === 3?"active":""}
                onClick={()=>setActiveIndex(3)}
                >Mabil boshqaruv dasturi</TabBtn>
            </TabBtnContainer>
            {activeIndex === 1?
            <TabPanel>
                <PrImage src='/images/primg1.png'/>
                <TextContainer>
                    <ItemTitle>Savdo dasturi</ItemTitle>
                    <ItemSubTitle>Far far away, behind the word mountains, far from the countries 
                        Vokalia and Consonantia, there live the blind texts. Separated they live 
                        in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean.

                    </ItemSubTitle>
                </TextContainer>
            </TabPanel>
                :activeIndex === 2?
            <TabPanel>
                
                <TextContainer>
                    <ItemTitle>Ombor dasturi</ItemTitle>
                    <ItemSubTitle>Far far away, behind the word mountains, far from the countries 
                    Vokalia and Consonantia, there live the blind texts. Separated they live 
                    in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.

                    </ItemSubTitle>
                </TextContainer>
                <PrImage src='/images/primg1.png'/>
            </TabPanel>
            :activeIndex === 3?                
            <TabPanel>
                <PrImage src='/images/primg1.png'/>
                <TextContainer>
                    <ItemTitle>Mobil dasturi</ItemTitle>
                    <ItemSubTitle>Far far away, behind the word mountains, far from the countries 
                    Vokalia and Consonantia, there live the blind texts. Separated they live 
                    in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.

                    </ItemSubTitle>
                </TextContainer>
            </TabPanel>:null
            }    
        </Container>
    );
}

export default Programs;