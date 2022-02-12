import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    height: 3rem;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "1rem 0" })}
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Center = styled.div`
text-align: center;
flex: 1;
`
const Logo = styled.h1`
font-weight: 700;
${mobile({ fontsize: "1.5rem" })}
`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
cursor: pointer
margin-left: 1.5rem;
${mobile({ marginLeft: '1rem'})}
`

const Language = styled.span`
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 1.5rem;
`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                   <Input />
                   <Search style={{color:'gray'}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>BUYSTUFF</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN-IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={2} color='primary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar