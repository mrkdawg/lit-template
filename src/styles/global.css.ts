import { css, CSSResult } from "lit";
import resetCSS from "./reset.css";

const globalCSS: CSSResult[] = [resetCSS, css`
  h1 {
    margin-bottom: 1rem;
  }
  a {
    color: blue;
  }
  a:hover {
    opacity: 0.5;
  }
  button {
    padding: 0.5em 1em;
  }
`];

export default globalCSS;