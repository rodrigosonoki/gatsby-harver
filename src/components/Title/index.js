import React from "react"

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
