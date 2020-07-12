import React from "react"
import styled from "styled-components"
import Title from "../components/title"

import img1 from "../assets/card-img1.gif"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 60px;
`

const Cards = styled.div`
  display: flex;
  width: 100%;
  max-width: 1008px;
  justify-content: space-between;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
`

const StyledCard = styled.div`
  height: 520px;
  width: 320px;
  height: 520px;
  width: 320px;
  background-color: #fff;
  border-radius: 16px;
  -webkit-box-shadow: 1px 1px 10px 6px #888; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 10px 6px #888; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 8px auto;
  }

  p {
    font-weight: bold;
    font-family: Montserrat;
    margin-bottom: 16px;
  }

  img {
    height: 320px;
    width: 320px;
    border-radius: 16px 16px 0 0;
  }

  h4 {
    text-align: center;
    color: #f17174;
    margin-bottom: 24px;
  }
`

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
