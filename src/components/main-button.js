import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 214px;
  height: 48px;
  border-radius: 8px;
  border: none;
  font-family: Montserrat;
  font-weight: bold;
  text-transform: uppercase;
  color: #fa8b6b;
  -webkit-box-shadow: 1px 1px 10px 6px #888; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 10px 6px #888; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`

function MainButton(props) {
  return (
    <div>
      <StyledButton>{props.text}</StyledButton>
    </div>
  )
}

export default MainButton
