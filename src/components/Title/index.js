import React from "react"
import styled from "styled-components"

import { Container } from "./styles"

function Title(props) {
  return (
    <div>
      <Container>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
      </Container>
    </div>
  )
}

export default Title
