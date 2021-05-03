import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle` // uppercase, will be a React comp
  :root {
    --background: #333;
    --white: #fff;
    --black: #000;
    --zeedog-green: #33d2c8;
    --zeenow-blue: #2fd6ee;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Desktop: 1rem = 16px
  // better accessibility, follows OS definition
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 1rem = 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 1rem = 14px
    }
  }

  body {
    background-color: var(--background);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default GlobalStyles