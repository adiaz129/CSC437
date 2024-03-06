import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import songPageCSS from "/src/styles/songpage.css?inline";

@customElement("song-page")
export class SongPageElement extends LitElement {
    render() {
        return html`
            <article>
                <h2>Fur Elise</h2>
                <a href="musician.html">
                    <p>Arranged by: Kooldude47</p>
                </a>
                <section class="description">
                    <img src="/images/furelise.png" width="600"/>
                    <li>Original Author: Beethoven</li>
                    <li>Arrangement by: Kooldude47</li>
                    <li>Aug 1, 2023</li>
                    <li>Difficulty: Intermediate</li>
                    <li>Piano</li>
                </section>
            </article>
        `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(songPageCSS)
    ];
}