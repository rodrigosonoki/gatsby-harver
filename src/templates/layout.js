import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import GlobalStyle from "../styles/GlobalStyle"

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
