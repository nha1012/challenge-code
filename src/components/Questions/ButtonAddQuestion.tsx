import React from 'react'
import styled from 'styled-components'

const ButtonAddQuestion = () => {
  return (
    <Container>
      <Button>
        + Add question
      </Button>
    </Container>

  )
}
const Button = styled.button`
  width: 140px;
  height: 50px;
  border-radius: none;
  background-color: #fff;
  border: 1px solid #000;
`

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4px;
  display: flex; 
  align-items: center;
`
export default ButtonAddQuestion
