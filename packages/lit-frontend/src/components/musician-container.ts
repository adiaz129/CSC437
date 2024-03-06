import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import homeCSS from "/src/styles/home.css?inline";
import "./musician-box";

@customElement("musician-container")
export class MusicianContainerElement extends LitElement {
    render() {
        return html`
        <article>
            <h2>Musicians</h2>
            <div class="musician-container">
                <section class="musician-items">
                    <musician-box
                    link="musician.html"
                    image="/images/kooldude.jpg">
                        <span slot="musician-name">Kooldude47</span>
                    </musician-box>
                </section>
            </div>
        </article>
        `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(homeCSS)
    ];
}