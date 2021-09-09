import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  border: 1px solid black;
  color: white;
  &.Active{
    background-color: blue;
  }
  &.Paused{
    background-color: orange;
  }
`
