import React from "react"

import { StyledButton } from "./styles"
function MainButton(props) {
  return (
    <div>
      <StyledButton>{props.text}</StyledButton>
    </div>
  )
}

export default MainButton
