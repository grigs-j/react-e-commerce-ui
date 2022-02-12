import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';
import {mobile} from '../responsive'

const Container = styled.div`
height: 100vh;
max-width: 100vw;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
`;

const Arrow = styled.div`
width: 3rem;
height: 3rem;
background-color: #f3f3f3;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === 'left' && '1rem'};
right: ${props=> props.direction === 'right' && '1rem'};
margin: auto;
opacity: 0.7;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.2s ease-in-out;
transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${props=>props.bg}
`;

const Image = styled.img`
height: 80%;
`;

const ImageContainer = styled.div`
height: 100%;
flex: 1;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 3rem;
`;

const Title = styled.h1`
font-size: 5rem;
`;
const Desc = styled.p`
margin: 3rem 0;
font-size: 1.25rem;
letter-spacing: 2px;
`;
const Button = styled.button`
padding: .3rem 1rem;
font-size: 1.25rem;
background-color: white;
cursor: pointer;
outline: none;
border: 1px solid black;
`;

const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(0)

    function handleClick(direction){
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img} />
                </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick('right')}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider