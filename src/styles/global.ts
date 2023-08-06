/* eslint-disable indent */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.fonts.primary}, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  p, input, textarea, button, strong {
    color: ${(props) => props.theme.colors.baseText};
    line-height: 130%;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${(props) =>
      props.theme.colors.baseInput} inset;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors.baseText} !important;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.baseLabel};
    border-radius: 8px;
  }
  
  .Toastify__toast-container {
    top: 7rem;
  }
`
