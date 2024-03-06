import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "express-backend/src/models/profile";
import { serverPath } from "./rest";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import "./song-container"

@customElement("user-profile")
export class UserProfileElement extends LitElement {
    @property()
    path: string = "";

    @state()
    profile?: Profile;

    render() {
        const {userid, name, date_joined, instruments, avatar_image} = (this.profile || {}) as Profile;

        let instrumentList: string = "Instruments: " + instruments?.join(", ");

        return html`
        <article>
            <h2>${userid}</h2>
            <div class="profile-container">
                <img src=${avatar_image} class="profile">
            </div>
            <p>Name: ${name}</p>
            <p>${instrumentList}</p>
            <p>Date Joined: ${date_joined}</p>
            <section class="sheetmusic">
                <h2>Sheet Music</h2>
            </section>
            <section class="favorites">
                <h2>Favorites</h2>
                <song-container></song-container>   
            </section>
        </article>
        `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        css`

        article > h2 {
            text-align: center;
            padding-left: 0em;
        }

        article > p {
            text-align: center;
            padding-left: 0em;
    /src

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

        const {userid, name, instruments, avatar_image} = (this.profile || {}) as Profile;

        console.log("Rendering form", this.profile);

        return html`
        <h2 class="edit">Edit Profile</h2>
        <form @submit=${this._handleSubmit}>
            <label>
                <span>Username: </span>
                <input name="userid" value="${userid}" />
            </label><br>
            <label>
                <span>Name: </span>
                <input name="name" value="${name}" />
            </label><br>
            <label>
                <span>Image: </span>
                <input name="avatar_image" value="${avatar_image}" />
            </label><br>
            <label>
                <span>Instruments: </span>
                <input name="instruments" .value=${instruments?.join(", ")} />
            </label>
            <div>
                <button type="submit">Submit</button>
            <div>
        </form> `;
    }

    static styles = [...UserProfileElement.styles, 
        css`
        .edit {
            text-align: center;
            padding-left: 0em;
        }
        form {
            display: flex;
            flex-flow: column;
          }
          label {
            display: flex;
            justify-content: space-between;
            margin-left: 40%;
            margin-right: 40%;
            margin-top: 5px;
            margin-bottom: 5px;
          }
          button {
            grid-column: value;
            width: 10em;
          }
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
          }
          input {
            font: inherit;
          }`];

    _handleSubmit(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself

        const target = ev.target as HTMLFormElement;
        const formdata = new FormData(target);
        const entries = Array.from(formdata.entries())
            .map(([k, v]) => (v === "" ? [k] : [k, v]))
            .map(([k, v]) =>
            k === "instruments"
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