import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 4.5rem;
margin-bottom: 1.5rem;
`;
const Description = styled.div`
font-size: 1.55rem;
width: 90%;
margin: 0 auto 1.5rem;
text-align: center;
`;
const InputContainer = styled.div`
width: 50%;
height: 3rem;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ width: "80%" })}
`;
const Input = styled.input`
border: none;
font-size: 1rem;
flex: 8;
padding-left: 1rem;
`;
const Button = styled.button`
min-width: 3rem;
flex: 1;
cursor: pointer;
background-color: steelblue;
color: white;
border: 1px solid white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
        </Description>
        <InputContainer>
            <Input placeholder='Your Email Here' />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter