import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import homeCSS from "/src/styles/home.css?inline";
import "../components/instrument-container";
import "../components/musician-container";

@customElement("landing-page")
export class LandingPageElement extends LitElement {
    render() {
        return html`
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