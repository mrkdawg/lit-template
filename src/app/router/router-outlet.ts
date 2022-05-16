import { LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./router";
import router from "./router";
import "./router-link";

@customElement("router-outlet")
export class RouterOutlet extends LitElement {
  
  @state() private view?: LitElement;

  constructor() {
    super();
    router.routeChange.subscribe(view => this.view = view);
  }

  override render() {
    return this.view;
  }
  
}

declare global {
  interface HTMLElementTagNameMap {
    "router-outlet": RouterOutlet
  }
}