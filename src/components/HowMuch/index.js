import React from "react"

import Title from "../Title"

import img1 from "../../assets/card-img1.gif"

import { Container, Cards, StyledCard } from "./styles"

const Card = props => (
  <StyledCard>
    {" "}
    <img src={props.img} alt="t-shirt" />
    <h4>{props.cardName}</h4>
    <div>
      <p>vc vende</p>
      <p>R$99.00</p>
    </div>
    <div>
      <p>vc paga</p>
      <p>R$99.00</p>
    </div>
    <div>
      <p>vc lucra</p>
      <p>R$99.00</p>
    </div>
  </StyledCard>
)

function HowMuchCard() {
  return (
    <div>
      <Container>
        <Title
          h1="Quanto custa?"
          p="Você define o quanto quer ganhar. Nós só vamos cobrar o valor do produto vendido (é sério!!!)."
        />
        <Cards>
          <Card img={img1} cardName="camiseta radical" />
          <Card img={img1} cardName="camiseta radical" />
          <Card img={img1} cardName="camiseta radical" />
        </Cards>
      </Container>
    </div>
  )
}

export default HowMuchCard
