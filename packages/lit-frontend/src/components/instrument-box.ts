import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import resetCSS from "../styles/reset.css?inline";
import pageCSS from "../styles/page.css?inline";

@customElement("instrument-box")
export class InstrumentBoxElement extends LitElement {
    @property()
    link: string = "";

    @property()
    icon: string = "";

    @property()
    image: string = "";

    render() {
        return html`
            <a href="${this.link}">
                <h3><slot name="instrument-name">Instrument</slot></h3>
                <svg class="icon">
                    <use href="${this.icon}" />
                </svg>
                <img src="${this.image}" width="200"/>
            </a>
        `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        css`
    svg.icon {
        display: inline;
        height: var(--icon-size);
        width: var(--icon-size);
        vertical-align: baseline;
        fill: currentColor;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        margin: 0;
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
        border-radius: 5px;
    }
    `];
}