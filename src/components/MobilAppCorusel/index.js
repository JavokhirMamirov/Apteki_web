import React from 'react'
import { Slider,Item } from './Corusel';

const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
]
const IMAGE_DATA = [
    {id:1, image:'/images/mb1.png'},
    {id:2, image:'/images/mb2.png'},
    {id:3, image:'/images/mb3.png'},
    {id:4, image:'/images/mb4.png'},
]
const AppCorusel = () =>{
    
    return (
        <Slider breakPoints={breakPoints}>
            {
            IMAGE_DATA.map((data,index)=>(
                <Item key={index} src={data.image}/>
             ))
             }
            
        </Slider>
    );
}

export default AppCorusel;