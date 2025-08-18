import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.css"


const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --black-color: #000000;
  }

  html {
    font-size: 10px;
    font-family: "Noto Sans KR";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: var(--black-color);
  }

  li {
    list-style: none;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`

export default GlobalStyle;