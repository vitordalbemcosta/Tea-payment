import styled from "styled-components"

export const Button = styled("button")`
  border: 1px solid ${({ isSelected }) => (isSelected ? "AE1E27" : "black")};
  background-color: rgb(129, 103, 151);
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  margin: .5rem;
  padding: .8rem 2rem;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    border: 1.5px solid white;
    color: white;
    background-color: gray;
  }
`;

export const Fragment = styled("fragment")`
  margin-top: 5vh;
`;