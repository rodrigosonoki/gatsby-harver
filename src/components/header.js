import React, { useState } from "react"
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
  transition: 0.2s;

  @media only screen and (max-width: 680px) {
    height: 64px;
    transition: 0.2s;
  }

  /* RESPONSIVE FULLSCREEN */
  .on {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #f17174;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const LogoContainer = styled.div`
  height: 48px;
  width: 48px;
  background: #f00;
`

const ButtonContainer = styled.div`
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

  @media only screen and (max-width: 680px) {
    display: none;
  }
`

const BackgroundContainer = styled.div`
  width: 100%;
  height: 80px;
  transition: 0.2s;

  @media only screen and (max-width: 680px) {
    height: 64px;
    transition: 0.2s;
  }
`

const ResponsiveMenu = styled.div`
  @media (max-width: 680px) {
    width: 40px;
    height: 30px;
    float: right;

    .one,
    .two,
    .three {
      background-color: #303030;
      height: 5px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
    }
  }
`

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  function toggleMenu() {
    setIsVisible(!isVisible)
    if (isVisible && window.innerWidth <= 680)
      document.body.style.overflow = "hidden"
    else document.body.style.overflow = "initial"
  }
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
        <div className={`${isVisible ? "" : "on"}`}>
          <ResponsiveMenu
            className={`${isVisible ? "" : "on"}`}
            onClick={toggleMenu}
          >
            <div className="one"></div>
            <div className="two"></div>
            <div className="one"></div>
          </ResponsiveMenu>
          <ButtonContainer>
            <ul>
              <li>
                <Link to="/sobre-nos">Sobre nós</Link>
              </li>
              <li>Crie sua loja</li>
            </ul>
          </ButtonContainer>
        </div>
      </Container>
      <BackgroundContainer />
    </div>
  )
}

export default Header
