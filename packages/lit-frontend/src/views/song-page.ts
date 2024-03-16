import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import songPageCSS from "/src/styles/songpage.css?inline";
import "../components/song-box";

@customElement("song-page")
export class LandingPageElement extends LitElement {
    render() {
        return html`
        <main>
        <article>
        <h2>From the Start</h2>
        <a href="/app/profile/Kooldude47">
            <p>Arranged by: Kooldude47</p>
        </a>
        <section class="description">
            <img src="/images/fromthestart.jpeg" width="600"/>
            <li>Original Author: Laufey</li>
            <li>Arrangement by: Kooldude47</li>
            <li>Jan 17, 2024</li>
            <li>Difficulty: Intermediate</li>
            <li>Guitar</li>
        </section>
    </article>
        </main>
    `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(songPageCSS)
    ];
}