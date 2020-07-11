import React from "react"
import styled from "styled-components"

const Container = styled.div`
  p {
    margin: 16px 0 60px;
  }

  p,
  h1 {
    text-align: center;
    color: #333;
  }
`

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
