import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import homeCSS from "/src/styles/home.css?inline";

import routes from "../routes";

import "../components/app-header";
import "../components/vaadin-router";

@customElement("sheetshare-app")
export class SheetShareAppElement extends LitElement {
    render() {
        return html`
        <app-header></app-header>
        <vaadin-router .routes=${routes}> </vaadin-router>
    `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(homeCSS)
    ];
}