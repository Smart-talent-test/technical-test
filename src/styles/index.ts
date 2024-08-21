import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    line-height: 1;
    font-family: "Montserrat", sans-serif;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    border: none;
    cursor: pointer;
    font: inherit;
    margin: 0;
    outline: none;
    padding: 0;
    text-decoration: none;
  }
    
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
