import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
flex: 1;
margin: .1rem;
height: 75vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({
  height: '20vh'
})}
`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h1`
color: white;
margin: 1.5rem;
`;
const Button = styled.button`
outline: none;
padding: .5rem 1rem;
border: 1px solid black;
background-color: white;
cursor: pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem