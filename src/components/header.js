import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid #c9c9c9;
  z-index: 9999;
  padding: 0 60px;
  margin-bottom: 80px;
  background: #fff;
`

const LogoContainer = styled.div`
  height: 48px;
  width: 48px;
  background: #f00;
`

const ButtonContainer = styled.nav`
  display: flex;

  ul {
    list-style: none;
    color: #414960;
    display: flex;
    text-transform: uppercase;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: bold;
    justify-content: space-between;
    width: 320px;
  }
  ul li {
    padding: 20px;
  }

  ul a {
    text-decoration: none;
  }

  ul a:visited {
    color: #414960;
  }
`

const BackgroundContainer = styled.div`
  width: 100%;
  height: 80px;
`

function Header() {
  return (
    <div>
      <Container>
        <LogoContainer>
          <Link to="/">
            <img
              src="https://api.adorable.io/avatars/48/abott@adorable.png"
              alt="brand-logo"
            />
          </Link>
        </LogoContainer>
        <ButtonContainer>
          <ul>
            <li>
              <Link to="/sobre-nos">Sobre nós</Link>
            </li>
            <li>Crie sua loja</li>
          </ul>
        </ButtonContainer>
      </Container>
      <BackgroundContainer />
    </div>
  )
}

export default Header
