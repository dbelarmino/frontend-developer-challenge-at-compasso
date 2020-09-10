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
    background: rgba(230, 232, 239, 0.4);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, button, input, textarea, select, option, ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.7rem !important;
    color: #CE1483;
  }

  a, button{
    -webkit-tap-highlight-color: transparent !important;
  }

  ::selection{
    background: #CE1483;
    color: #fff;
  }

`

export default GlobalStyles
