import React from "react"
import Header from "../components/globalComponents/Header"
import Footer from "../components/globalComponents/Footer"
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
