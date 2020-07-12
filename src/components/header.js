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
  padding: 0 16px;
  margin-bottom: 80px;
  background: #fff;

  @media only screen and (max-width: 680px) {
    height: 64px;

    /* <--FULL SCREEN--> */
    background-color: ${({ isVisible }) => (isVisible ? "" : "#f17174")};
    justify-content: ${({ isVisible }) => (isVisible ? "" : "center")};
    width: ${({ isVisible }) => (isVisible ? "" : "100vw")};
    height: ${({ isVisible }) => (isVisible ? "" : "100vh")};
    position: ${({ isVisible }) => (isVisible ? "" : "absolute")};
    top: ${({ isVisible }) => (isVisible ? "" : "0")};
    left: ${({ isVisible }) => (isVisible ? "" : "0")};
  }
`

const LogoContainer = styled.div`
  height: 48px;
  width: 48px;
  background: #f00;

  @media only screen and (max-width: 680px) {
    display: ${({ isVisible }) => (isVisible ? "" : "none")};
  }
`

const ButtonContainer = styled.div`
  display: flex;

  ul {
    list-style: none;
    color: #414960;
    display: flex;
    text-transform: uppercase;
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
    color: #303030;
  }

  @media only screen and (max-width: 680px) {
    /* <--FULL SCREEN--> */
    display: ${({ isVisible }) => (isVisible ? "none" : "block")};
    z-index: ${({ isVisible }) => (isVisible ? "" : "9999")};
    text-align: ${({ isVisible }) => (isVisible ? "" : "center")};

    ul {
      display: ${({ isVisible }) => (isVisible ? "" : "flex")};
      flex-direction: ${({ isVisible }) => (isVisible ? "" : "column")};
      font-size: ${({ isVisible }) => (isVisible ? "" : "32px")};
    }

    ul a {
      color: ${({ isVisible }) => (isVisible ? "" : "#fff")};
    }
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
    position: ${({ isVisible }) => (isVisible ? "" : "absolute")};
    right: ${({ isVisible }) => (isVisible ? "" : "30px")};
    top: ${({ isVisible }) => (isVisible ? "" : "18px")};

    div:nth-child(1) {
      background-color: ${({ isVisible }) => (isVisible ? "#303030" : "#fff")};
      height: 5px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      border-radius: 8px;
      transform: ${({ isVisible }) =>
        isVisible ? "" : "rotate(45deg) translate(7px, 7px)"};
    }

    div:nth-child(2) {
      background-color: #303030;
      height: 5px;
      border-radius: 8px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      opacity: ${({ isVisible }) => (isVisible ? "" : "0")};
    }

    div:nth-child(3) {
      background-color: ${({ isVisible }) => (isVisible ? "#303030" : "#fff")};
      height: 5px;
      border-radius: 8px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      transform: ${({ isVisible }) =>
        isVisible ? "" : "rotate(-45deg) translate(8px, -9px)"};
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
      <Container isVisible={isVisible}>
        <LogoContainer isVisible={isVisible}>
          <Link to="/">
            <img
              src="https://api.adorable.io/avatars/48/abott@adorable.png"
              alt="brand-logo"
            />
          </Link>
        </LogoContainer>

        <ResponsiveMenu isVisible={isVisible} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </ResponsiveMenu>
        <ButtonContainer isVisible={isVisible}>
          <ul>
            <li>
              <Link to="/sobre-nos">Sobre nós</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Crie sua loja</Link>
            </li>
          </ul>
        </ButtonContainer>
      </Container>
      <BackgroundContainer />
    </div>
  )
}

export default Header
