import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Song } from "ts-models";

@customElement("song-box")
export class SongBoxElement extends LitElement {

    @property()
    link: string = "";

    @property()
    image: string = "";

    @property()
    description: string = ""

    render() {
        const descriptionArray = this.description.split(',');
        return html`
        <a href="${this.link}">
        <div>
            <h3><slot name="song-name">Song</slot></h3>
            <img src="${this.image}" width="200" height="260"/>
        </div>
            <p>Original Author: ${descriptionArray[0]}</p>
            <p>Arrangement by: ${descriptionArray[1]}</p>
            <p>${descriptionArray[2]}</p>
            <p>Difficulty: ${descriptionArray[3]}</p>
            <p>${descriptionArray[4]}</p>
        </a>
        `;
    }

    static styles = css`
    a > div {
        text-align: center;
        padding-bottom: .5em;
    }
    h3 {
        padding-bottom: .5em;
    }
    a > p {
        text-align: left;
        padding-left: 3em;
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
    `;
}