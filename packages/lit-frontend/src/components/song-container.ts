import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import musicianPageCSS from "/src/styles/musicianpage.css?inline";
import "./song-box";

@customElement("song-container")
export class SongContainerElement extends LitElement {
    render() {
        return html`
            <div class="song-container">
                <section class="song-items">
                    <song-box
                    link="fromthestart.html"
                    image="/images/fromthestart.jpeg"
                    description="Laufey, Kooldude47, Jan 17 2024, Intermediate, Guitar">
                        <span slot="song-name">From the Start</span>
                    </song-box>
                </section>
            </div>
        `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(musicianPageCSS)
    ];
}