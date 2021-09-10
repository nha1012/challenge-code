import React from 'react'
import styled from 'styled-components'

const Questions = (props: {question: string}) => {
  return (
    <Container>
      {props.question}
    </Container>
  )
}
const Container = styled.section`
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4px;
  display: flex; 
  align-items: center;
  height: 30px;
  padding-left: 10px;
`
export default Questions
