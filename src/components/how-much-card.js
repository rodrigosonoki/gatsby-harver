import React from "react"
import styled from "styled-components"

import img1 from "../assets/card-img1.gif"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 48px;

  h1 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
  }
`

const Cards = styled.div`
  display: flex;
  width: 1008px;
  justify-content: space-between;
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
  }

  img {
    height: 320px;
    width: 320px;
    border-radius: 16px 16px 0 0;
  }

  h4 {
    text-align: center;
    color: #f17174;
    margin-bottom: 16px;
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
        <h1>Quanto custa?</h1>
        <p>
          Você define o quanto quer ganhar. Nós só vamos cobrar o valor do
          produto vendido (é sério!!!).
        </p>
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
