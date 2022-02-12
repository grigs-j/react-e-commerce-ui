import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"


const Container = styled.div``;
const Wrapper = styled.div`
display: flex;
padding: 4rem;
${mobile({ padding: "1rem", flexDirection: 'column' })}
`;
const ImgContainer = styled.div`
flex: 1;
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0 4rem;
${mobile({ padding: "1rem" })}
`;
const Title = styled.h1`
font-weight: 100;
`;
const Desc = styled.p`
margin: 1.5rem 0;
`;
const Price = styled.span`
font-weight: 100;
font-size: 2.5rem;
`;
const Image = styled.img`
width: 100%;
object-fit: cover;
height: 90vh;
${mobile({ height: "40vh" })}
`;

const FilterContainer = styled.div`
width: 50%;
margin: 2rem 0;
display: flex;
justify-content: space-between;
${mobile({ width: "100%" })}
`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterColor = styled.div`
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 3px;
cursor: pointer;
`;
const FilterTitle = styled.span`
font-size: 1.25rem;
`;
const FilterSize = styled.select`
margin-left: .5rem;
padding: .25rem;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 500;
font-size: 1.5rem;
margin: 0 5px;
`;
const Amount = styled.span`
width: 2rem;
height: 2rem;
border-radius: 10px;
border: 1px solid lightgray;
display: flex;
align-items: center;
justify-content: center;
`;
const Button = styled.button`
padding: 1rem;
border: 1px solid black;
background-color: white;
cursor: pointer;

&:hover{
    background-color: lightgray;
}
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://images.unsplash.com/photo-1525792869870-de3b854c5bcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80' />
            </ImgContainer>
            <InfoContainer>
                <Title>Lorem lorem</Title>
                <Desc>
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                </Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='red' />
                        <FilterColor color='blue' />
                        <FilterColor color='gray' />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>SM</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product