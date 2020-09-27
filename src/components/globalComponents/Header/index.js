import React, { useState } from "react"

import { Link } from "gatsby"

import {
  Container,
  LogoContainer,
  ButtonContainer,
  BackgroundContainer,
  ResponsiveMenu,
} from "./styles"

import logo from "../../../assets/logo.png"

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
            <img src={logo} alt="brand-logo" height="48px" />
          </Link>
        </LogoContainer>

        {/*         <ResponsiveMenu isVisible={isVisible} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </ResponsiveMenu>
        <ButtonContainer isVisible={isVisible}>
          <ul>
            <li>
              <a
                href="https://app.harver.com.br"
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
            </li>
          </ul>
        </ButtonContainer> */}
      </Container>
      <BackgroundContainer />
    </div>
  )
}

export default Header
