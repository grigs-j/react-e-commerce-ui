import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: .25rem 0;
    background-color: steelblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-align: center;
`

const Announcement = () => {
  return (
    <Container>
        Super deal! Free shipping on orders over $50!
    </Container>
  )
}

export default Announcement