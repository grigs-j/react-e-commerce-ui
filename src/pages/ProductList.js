import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive"

const Container = styled.div``;
const Title = styled.h1`
margin: 1.5rem;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 1.5rem;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
font-size: 1.25rem;
font-weight: 700;
margin-right: 1.5rem;
${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
padding: .5rem;
margin-right: 1.5rem;
${mobile({ marginRight: "1rem 0" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Red1</Option>
                    <Option>Red2</Option>
                    <Option>Red3</Option>
                    <Option>Red4</Option>
                    <Option>Red5</Option>
                    <Option>Red6</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
            </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList