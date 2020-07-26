import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
}

h1 {
    font-size: 48px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    
}

h2 {
    font-size: 36px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

h3 {
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

h4 {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

p {
    font-size: 16px;
}
`

export default GlobalStyle
