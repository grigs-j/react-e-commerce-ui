import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 1.5rem;
`;
const Center = styled.div`
flex: 1;
padding: 1.5rem;
${mobile({ display: "none" })}
`;
const Right = styled.div`
flex: 1;
padding: 1.5rem;
${mobile({ backgroundColor: "#fff8f8" })}
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
margin: 1.5rem;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
color: white;
background-color: ${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 0 0.5rem;
`;

const Title=styled.h3`
margin-bottom: 2rem;
`;
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem=styled.li`
width: 50%;
margin-bottom: .75rem;
`;

const ContactItem = styled.div`
margin-bottom: 1.5rem;
display: flex;
align-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>BUYSTUFF</Logo>
            <Desc>
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem      Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
            </Desc>
            <SocialContainer>
                <SocialIcon color='steelblue'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='steelblue'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='steelblue'>
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Helpful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Help</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <ContactItem>
                <Room style={{marginRight:'.5rem'}}/>
                555 Happy Lane, South Dakota 77700
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:'.5rem'}}/>
                +0 123 456 7890
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:'.5rem'}}/>
                contact@buystuff.biz
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer