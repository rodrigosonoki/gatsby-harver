import React from "react"
import Layout from "../templates/layout"
import styled from "styled-components"

const Container = styled.div``

export default () => (
  <div>
    <Layout>
      <Container>
        <h1>This is a H1 tag.</h1>
        <p>Hello, World!</p>
      </Container>
    </Layout>
  </div>
)
