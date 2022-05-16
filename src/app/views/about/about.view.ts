import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import globalCSS from "../../../styles/global.css";
import "../../components/my-element/my-element";

@customElement("about-view")
export class AboutView extends LitElement {

  static override styles = globalCSS;

  override render() {
    return html`
      <h1>About</h1>
      <my-element name="Joe"></my-element>
    `;
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    "about-view": AboutView
  }
}