import { LitElement } from "lit";

export interface Route {
  path: string;
  component: LitElement;
}

export interface Router {
  routes: Route[];
  getComponentFromPath(path: string): LitElement;
  navigate(path: string): void;
}