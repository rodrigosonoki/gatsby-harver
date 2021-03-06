import React from "react"
import Emoji from "../../../globalComponents/Emoji"
import Title from "../../../globalComponents/Title"

import { Container, Cards, StyledCard } from "./styles"

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
            description="Crie sua arte e chame a gente no Instagram (@harverbrasil) ou pelo formulário abaixo!"
          ></Card>
          <Card
            emoji="💆🏻‍♂️"
            title="A gente faz a parte complicada"
            description="A gente fica responsável por toda a parte da produção, recebimento e envio do pedido."
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
