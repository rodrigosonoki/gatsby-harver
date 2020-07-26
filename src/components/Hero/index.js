import React from "react"
import styled from "styled-components"
import MainButton from "../MainButton"

import imgBg from "../../assets/homem-bg.png"

import { Title, Container } from "./styles"

function Hero() {
  return (
    <div>
      <Container>
        <div>
          <Title>
            <h1>
              Crie.
              <br />A gente cuida do resto.{" "}
            </h1>
            <p>
              A plataforma da Harver oferece uma solução completa pra você
              começar a vender online.
            </p>
            <MainButton text="crie sua loja" />
          </Title>
          <img src={imgBg} alt="man-standing" />
        </div>
      </Container>
    </div>
  )
}

export default Hero
