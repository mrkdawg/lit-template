import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import globalCSS from "../../../styles/global.css";

@customElement("home-view")
export class HomeView extends LitElement {

  static override styles = [globalCSS, css`
    p {
      font-weight: bold;
      font-size: 1.2em;
      margin-top: 0;
    }
  `];

  override render() {
    return html`
      <h1>Home</h1>
      <p>Eu labore Lorem laborum commodo deserunt nulla sit ut veniam ea. Nostrud non laboris id veniam id esse ex exercitation consectetur sint ad cupidatat proident ipsum. Quis adipisicing ipsum nulla non qui dolore fugiat est aliquip aliquip. Lorem velit nulla ea consequat.</p>
    `;
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    "home-view": HomeView
  }
}