import styled from "styled-components"

export const Button = styled("button")`
    border: 1px solid ${({ isSelected }) => (isSelected ? "gray" : "black")};
    background-color: #fff;
    color: ${({ isSelected }) => (isSelected ? "gray" : "#000")};
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;

   &:hover {
       border: 1px solid gray;
       color: gray;
   } 
`;