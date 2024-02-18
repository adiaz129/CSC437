import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "express-backend/src/models/profile";
import { serverPath } from "./rest";
import resetCSS from "../styles/reset.css?inline";
import pageCSS from "../styles/page.css?inline";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
    @property()
    path: string = "";

    @state()
    profile?: Profile;

    render() {
        const {userid, name, date_joined, instruments} = (this.profile || {}) as Profile;

        let instrumentList: string = "Instruments: " + instruments?.join(", ");

        return html`
        <article>
            <h2>${userid}</h2>
            <div class="profile-container">
                <img src="/images/kooldude.jpg" class="profile">
            </div>
            <p>Name: ${name}</p>
            <p>${instrumentList}</p>
            <p>Date Joined: ${date_joined}</p>
            <section class="sheetmusic">
                <h2>Sheet Music</h2>
            </section>
            <section class="favorites">
                <h2>Favorites</h2>
                <div class="song-container">
                    <section class="song-items">
                        <song-box
                        link="fromthestart.html"
                        image="/images/fromthestart.jpeg"
                        description="Laufey, Kooldude47, Jan 17 2024, Intermediate, Guitar">
                            <span slot="song-name">From the Start</span>
                        </song-box>
                    </section>
                    <section class="song-items">
                        <song-box
                        link="furelise.html"
                        image="/images/furelise.png"
                        description="Beethoven, Kooldude47, Aug 1 2023, Intermediate, Piano">
                            <span slot="song-name">Fur Elise</span>
                        </song-box>
                    </section>
                    <section class="song-items">
                        <song-box
                        link="riverflowsinyou.html"
                        image="/images/riverflowsinyou.png"
                        description="Yiruma, Kooldude47, Feb 12 2023, Easy, Violin">
                            <span slot="song-name">River Flows in You</span>
                        </song-box>
                    </section>
                </div>
            </section>
        </article>
        `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        css`
        .song-container {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            padding-left: 86px;
        }

        .song-items {
            width: 300px;
            margin: 10px;
            border: 1px solid currentColor;
            border-radius: 5px;
            background-color: var(--color-box-background);
            padding-bottom: 1em;
            color: var(--color-box-text);
        }

        .song-items > a > div {
            text-align: center;
            padding-bottom: .5em;
        }
        .song-items p {
            text-align: left;
            padding-left: 3em;
        }

        article > h2 {
            text-align: center;
            padding-left: 0em;
        }

        .song-items h3 {
            padding-top: .5em;
            padding-bottom: .5em;
        }

        article > p {
            text-align: center;
            padding-left: 0em;
        }

        .profile-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: .5em;
            padding-bottom: .5em;
        }

        .profile {
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
    `];

    _fetchData(path: string) {
        fetch(serverPath(path))
        .then((response) => {
            if (response.status === 200) {
            return response.json();
            }
            return null;
        })
        .then((json: unknown) => {
            if (json) this.profile = json as Profile;
        });
    }

    connectedCallback() {
        if (this.path) {
        this._fetchData(this.path);
        }
        super.connectedCallback();
    }

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        if (name === "path" && oldValue !== newValue && oldValue) {
            this._fetchData(newValue);
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }
}

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
    render() {

        const profile = (this.profile || {}) as Profile;
        const {
        userid,
        name,
        date_joined,
        instruments
        } = profile;

        console.log("Rendering form", this.profile);

        return html`
        <h2>${userid}</h2>
        <p>Name: ${name}</p>
        <p>${instruments}</p>
        <p>Date Joined: ${date_joined}</p>
        <form @submit=${this._handleSubmit}>
            <label for="fname">First name:</label><br>
            <input type="text" id="name" name="name" value=${name}><br>
            <label for="cars">Choose a car:</label>
            <select id="cars" name="cars" size="4" multiple>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select><br><br>
            <button type="submit">Submit</button>
        </form> `;
    }

    static styles = [...UserProfileElement.styles, 
        css`
        label {
            margin: 0,
        }`];

    _handleSubmit(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself

        const target = ev.target as HTMLFormElement;
        const formdata = new FormData(target);
        const entries = Array.from(formdata.entries())
            .map(([k, v]) => (v === "" ? [k] : [k, v]))
            .map(([k, v]) =>
            k === "airports"
                ? [k, (v as string).split(",").map((s) => s.trim())]
                : [k, v]
            );
        const json = Object.fromEntries(entries);

        this._putData(json);
    }

    _putData(json: Profile) {
    fetch(serverPath(this.path), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json)
    })
        .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
        })
        .then((json: unknown) => {
        if (json) this.profile = json as Profile;
        })
        .catch((err) =>
        console.log("Failed to PUT form data", err)
        );
    }
}