import styled from "styled-components"

export const Button = styled("button")`
  border: 1px solid ${({ isSelected }) => (isSelected ? "AE1E27" : "black")};
  background-color: #eb8a90;
  color: ${({ isSelected }) => (isSelected ? "#ffff" : "#000")};
  margin: 1.5rem;
  padding: 1.5rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    border: 1.5px solid white;
    color: white;
    background-color: gray;
  }
`;

export const Fragment = styled("fragment")`
  margin-top: 10vh;
`;