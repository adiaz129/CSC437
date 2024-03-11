import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import musicianPageCSS from "/src/styles/musicianpage.css?inline";
import { Song } from "ts-models";
import "./song-box";



@customElement("song-container")
export class SongContainerElement extends LitElement {

        
    render() {
        return html`
            <div class="song-container">
                <section class="song-items">
                    <song-box
                    link="/app/song/from-the-start"
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