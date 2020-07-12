import React from "react"
import styled from "styled-components"
import Emoji from "./emoji"
import Title from "./title"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 60px;
`

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 960px;

  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`

const StyledCard = styled.div`
  width: 240px;
  height: 280px;

  h3 {
    margin: 8px 0 16px;
  }
  p {
    font-size: 14px;
  }
`

const Card = props => (
  <StyledCard>
    <Emoji symbol={props.emoji} size={48} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </StyledCard>
)

function Arguments() {
  return (
    <div>
      <Container>
        <Title
          h1="É tipo criar a sua própria loja."
          p="Só que sem riscos e nem custos adicionais. É sério!"
        ></Title>
        <Cards>
          <Card
            emoji="👕"
            title="Desenvolva seus produtos"
            description="Crie sua conta grátis na Harver e use nossa plataforma pra criar seus produtos de forma rápida e fácil."
          ></Card>
          <Card
            emoji="💆🏻‍♂️"
            title="A gente faz a parte complicada"
            description="A gente fica responsável por toda a parte da produção, recebimento e envio do pedido. Assim, você tem mais tempo pra fazer o que mais gosta.."
          ></Card>
          <Card
            emoji="👩🏼‍💻"
            title="Estamos prontos pra te ajudar"
            description="Quando precisar de algum tipo de suporte, nosso chat está disponível 24h por dia."
          ></Card>
        </Cards>
      </Container>
    </div>
  )
}

export default Arguments
