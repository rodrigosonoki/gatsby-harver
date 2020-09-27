import React from "react"

import Title from "../../../globalComponents/Title"

import img1 from "../../../../assets/man-in-t-shirt.png"

import { Container, Cards, StyledCard } from "./styles"

const Card = props => (
  <StyledCard>
    {" "}
    <img src={props.img} alt="t-shirt" />
    <h4>{props.cardName}</h4>
    <div>
      <p>vc vende por</p>
      <p>R$100.00</p>
    </div>
    <div>
      <p>vc paga apenas</p>
      <p>R$70.00</p>
    </div>
    <div>
      <p>vc lucra</p>
      <p>R$30.00</p>
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
          <Card img={img1} cardName="THE BASIC TEE" />
        </Cards>
      </Container>
    </div>
  )
}

export default HowMuchCard
