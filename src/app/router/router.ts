import { LitElement } from "lit";
import { Route } from "./routes.types";
import { BehaviorSubject } from "rxjs";

import "../views/home/home.view";
const homeView: LitElement = document.createElement("home-view");

import "../views/about/about.view";
const aboutView: LitElement = document.createElement("about-view");

class Router {

  private readonly routes: Route[] = [
    { path: "", component: homeView },
    { path: "about", component: aboutView }
  ];

  public routeChange: BehaviorSubject<LitElement>;

  public get currentPath() : string {
    return location.pathname.replace("/", "");
  }

  constructor() {

    this.routeChange = new BehaviorSubject<LitElement>(this.getComponentFromPath(this.currentPath));

    window.addEventListener("popstate", () => {
      this.routeChange.next(this.getComponentFromPath(this.currentPath));
    });

  }

  private getComponentFromPath(path: string): LitElement {
    const routeFound = this.routes.find(route => route.path === path);
    if (routeFound) return routeFound.component;
    return this.routes.find(route => route.path === "")!.component;
  }

  public navigate(path: string): void {
    history.pushState(null, "", `/${path}`);
    this.routeChange.next(this.getComponentFromPath(path));
  }

}

export default new Router();