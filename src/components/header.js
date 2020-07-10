import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid #c9c9c9;
  z-index: 9999;
  padding: 0 60px;
`

const LogoContainer = styled.div`
  height: 48px;
  width: 48px;
  background: #f00;
`

const ButtonContainer = styled.nav`
  width: 480px;

  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    color: #414960;
    display: flex;
    text-transform: uppercase;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: bold;
  }
  ul li {
    padding: 20px;
  }

  ul a {
    text-decoration: none;
  }
`

function Header() {
  return (
    <div>
      <Container>
        <LogoContainer>
          <img
            src="https://api.adorable.io/avatars/48/abott@adorable.png"
            alt="brand-logo"
          />
        </LogoContainer>
        <ButtonContainer>
          <ul>
            <li>
              <Link to="/como-funciona">Como funciona</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre nós</Link>
            </li>
            <li>Crie sua loja</li>
          </ul>
        </ButtonContainer>
      </Container>
    </div>
  )
}

export default Header
