import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "../styles/reset.css?inline";
import pageCSS from "../styles/page.css?inline";
import homeCSS from "../styles/home.css?inline";

import routes from "../routes";

import "../components/app-header";
import "../components/instrument-container";
import "../components/musician-container";

@customElement("sheetshare-app")
export class SheetShareAppElement extends LitElement {
    render() {
        return html`
        <app-header></app-header>
        <main>
            <instrument-container></instrument-container>
            <musician-container></musician-container>
        </main>
    `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(homeCSS)
    ];
}