import React from 'react'

//styles
import styled from 'styled-components' 
const ButtonTag = styled.button`
  h3 {
    background-color: red;
  }
`;





function Button() {
  return (
    <ButtonTag>
      <h3>Botao</h3>
    </ButtonTag>
  )
}

export default Button;