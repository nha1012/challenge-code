import styled from "styled-components";

export const DetailsStandup = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const Container = styled.div`
  max-width: 1240px;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  & ul.question-container{
    list-style: none;
  }
`
