import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import homeCSS from "/src/styles/home.css?inline";
import "../components/song-container";

@customElement("guitar-page")
export class LandingPageElement extends LitElement {
    render() {
        return html`
        <main>
        <article>
                <h2>Guitar</h2>
                <div>
                    <h2>Songs</h2>
            <song-container></song-container>
            </div>
            </article>
        </main>
    `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(homeCSS)
    ];
}