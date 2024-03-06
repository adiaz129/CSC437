import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import homeCSS from "/src/styles/home.css?inline";
import "./instrument-box"


@customElement("instrument-container")
export class InstrumentContainerElement extends LitElement {
    render() {
        return html`
        <article>
            <h2>Instruments</h2>
            <div class="instrument-container">
                <section class="instrument-items">
                    <instrument-box
                    link="guitar.html"
                    icon="/icons/instruments.svg#icon-guitar"
                    image="/images/guitar.jpg">
                        <span slot="instrument-name">Guitar</span>
                    </instrument-box>
                </section>
                <section class="instrument-items">
                    <instrument-box
                    link="piano.html"
                    icon="/icons/instruments.svg#icon-piano"
                    image="/images/piano.jpg">
                        <span slot="instrument-name">Piano</span>
                    </instrument-box>
                </section>
                <section class="instrument-items">
                    <instrument-box
                    link="violin.html"
                    icon="/icons/instruments.svg#icon-violin"
                    image="/images/violin.jpg">
                        <span slot="instrument-name">Violin</span>
                    </instrument-box>
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