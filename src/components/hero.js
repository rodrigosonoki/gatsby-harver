import React from "react"
import styled from "styled-components"
import MainButton from "../components/main-button"

import imgBg from "../assets/homem-bg.png"

const Container = styled.div`
  width: 100%;
  height: 800px;
  background: rgb(255, 153, 102);
  background: linear-gradient(
    144deg,
    rgba(255, 153, 102, 1) 0%,
    rgba(241, 113, 116, 1) 65%
  );
  padding: 48px 0 60px;

  div {
    margin: auto;
    max-width: 1200px;
    display: flex;
  }
`

const Title = styled.div`
  color: #fff;

  width: 50%;

  p {
    margin: 8px 0 16px;
    font-family: Montserrat;
    font-weight: 300;
    font-size: 18px;
  }
`

function Hero() {
  return (
    <div>
      <Container>
        <div>
          <Title>
            <h1>
              Crie.
              <br />A gente cuida do resto.
              <p>
                A plataforma da Harver oferece uma solução completa pra você
                começar a vender online.
              </p>
              <MainButton text="crie sua loja"></MainButton>
            </h1>
          </Title>

          <img src={imgBg} alt="man-standing" />
        </div>
      </Container>
    </div>
  )
}

export default Hero
