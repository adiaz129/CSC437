import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("musician-box")
export class MusicianBoxElement extends LitElement {
    @property()
    link: string = "";

    @property()
    image: string = "";

    render() {
        return html`
        <a href="${this.link}">
            <h3><slot name="musician-name">Musician</slot></h3>
            <img src="${this.image}" class="profile-header"/>
        </a>
        `;
    }

    static styles = css`
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
    }
    .profile-header {
        width: var(--icon-size);
        height: var(--icon-size);
        border-radius: 50%;
    }
    `;
}