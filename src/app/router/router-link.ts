import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./router";
import globalCSS from "../../styles/global.css";
import router from "./router";

@customElement("router-link")
export class RouterLink extends LitElement {

  static override styles = globalCSS;

  @property() href!: string;

  override render() {
    return html`
      <a @click=${this.navigate}>
        <slot></slot>
      </a>
    `;
  }

  private navigate(e: MouseEvent): void {
    e.preventDefault();
    router.navigate(this.href.replace("/", ""));
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    "router-link": RouterLink
  }
}