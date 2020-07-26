import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import GlobalStyle from "../styles/globalStyle"

function Layout({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
