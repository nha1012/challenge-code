import styled from "styled-components"
export const Container = styled.div`
border: 1px solid;
padding: 20px;
a{
  text-decoration: none;
  color: black;
}

`

export const LeftContainer = styled.div`
  & ul.user-list{
    list-style: disc;
  }
  ul li{
    font-weight: bold;
  }
  ul{
    list-style: none;
  }
`
export const RightContainer = styled.div`
ul{
  list-style: none;
}

`
export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
