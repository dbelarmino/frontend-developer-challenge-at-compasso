import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body,  #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, button, input, textarea, select, option, ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.7rem !important;
    color: #000;
  }

  a, button{
    -webkit-tap-highlight-color: transparent !important;
  }

`

export default GlobalStyles
