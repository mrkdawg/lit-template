import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import router from "./app/router/router";
import "./app/router/router-outlet";
import globalCSS from "./styles/global.css";

@customElement("app-container")
export class AppContainer extends LitElement {

  static override styles = [globalCSS, css`
    :host {
      display: block;
      padding: 1.5em 2em;
    }
    header {
      margin-bottom: 2em;
    }
    router-link:not(:last-of-type) {
      margin-right: 1em;
    }
    router-link.current {
      font-size: 1em;
      font-weight: bold;
    }
  `];

  constructor() {
    super();
    router.routeChange.subscribe(() => this.requestUpdate());
  }

  override render() {
    return html`
      <header>
        <router-link href="/" class=${router.currentPath === "" ? "current" : ""}>
          Home
        </router-link>
        <router-link href="/about" class=${router.currentPath === "about" ? "current" : ""}>
          About
        </router-link>
      </header>
      <router-outlet></router-outlet>
    `;
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    "app-container": AppContainer
  }
}