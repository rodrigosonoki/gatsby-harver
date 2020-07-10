import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
    background-color: #fff;
    font-family: Poppins;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
}

h1 {
font-size: 48px;
font-family: Montserrat;
font-weight: bold
}

p {
    font-size: 16px;
}
`

export default GlobalStyle
