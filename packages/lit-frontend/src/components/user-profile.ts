import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile, Song } from "ts-models";
import { serverPath } from "./rest";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import "./song-container"

@customElement("user-profile")
export class UserProfileElement extends LitElement {
    @property({ attribute: false })
    using?: Profile;

    @state()
    songUsing?: Song[];

    get profile() {
        return this.using || ({} as Profile);
    }
    @property()
    path: string = "/profiles";

    @state()
    newAvatar?: string;

    @state()
    newSheetMusic?: string;


    render() {
        const {userid, name, date_joined, instruments} = (this.profile || {}) as Profile;
        
        let instrumentList: string;
        if (typeof instruments === 'string') {
            let instrumentArray = JSON.parse(instruments);
            instrumentList = "Instruments: " + instrumentArray.join(", ");
        }
        else {
            instrumentList = "Instruments: None";
        }

        return html`
        <article>
            <h2>${userid}</h2>
            <p>
            ${this._renderAvatar()}
            </p>
            <p>Name: ${name}</p>
            <p>${instrumentList}</p>
            <p>Date Joined: ${date_joined}</p>
            <section class="sheetmusic">
                <h2>Sheet Music</h2>
                <song-container .using=${this.songUsing}></song-container>
                <button class="open-button" @click=${this.openForm}>Add Song</button>
                <div class="form-popup" id="myForm" style="display: none;">
                    <form @submit=${this.submitForm} class="form-container">
                    <h2>Add Song</h2>
                    <label for="song_name"><b>Song Name</b></label>
                    <input type="text" placeholder="Enter Song Name" name="song_name" required>
                    <label for="original_author"><b>Original Author</b></label>
                    <input type="text" placeholder="Enter Name of Original Author" name="original_author" required>
                    <label for="difficulty"><b>Difficulty</b></label>
                    <input type="text" placeholder="Enter Difficulty" name="difficulty" required>
                    <label for="instrument"><b>Instrument</b></label>
                    <input type="text" placeholder="Enter Instrument" name="instrument" required>
                    <label for="sheet_music"><b>Sheet Music</b></label>
                    <input name="sheet_music" type="file" @change=${this._handleSheetMusicSelected} required/>
                    <button type="submit" class="btn">Add Song</button>
                    <button type="button" class="btn cancel" @click=${this.closeForm}>Close</button>
                    </form>
                </div>
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
        }

        .profile-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: .5em;
            padding-bottom: .5em;
        }

        .profile {
        grid-column: key;
        grid-row: auto/span 2;
        display: flex;
        justify-content: center;
        justify-self: center;
        align-self: center; 
        position: relative;
        width: 150px;
        height: 150px;
        aspect-ratio: 1;
        border-radius: 50%;
        text-align: center;
        overflow: hidden;
        }
        .open-button {
            background-color: #f7db75;
            color: black;
            padding: 16px 20px;
            border: none;
            cursor: pointer;
            opacity: 0.8;
            position: fixed;
            bottom: 23px;
            right: 28px;
            width: 280px;
            font-size: 16px;
          }
          
          /* The popup form - hidden by default */
          .form-popup {
            display: none;
            position: fixed;
            bottom: 0;
            right: 15px;
            border: 1px solid #3a2e17;
            z-index: 9;
          }
          
          /* Add styles to the form container */
          .form-container {
            max-width: 300px;
            padding: 10px;
            background-color: #f1f1f1;
          }
          
          /* Full-width input fields */
          .form-container input[type=text], .form-container input[type=password] {
            width: 100%;
            padding: 15px;
            margin: 5px 0 22px 0;
            border: none;
            background: #eee5d4;
          }
          
          /* When the inputs get focus, do something */
          .form-container input[type=text]:focus, .form-container input[type=password]:focus {
            background-color: #ddd;
            outline: none;
          }
          
          /* Set a style for the submit/login button */
          .form-container .btn {
            background-color: #04AA6D;
            color: white;
            padding: 16px 20px;
            border: none;
            cursor: pointer;
            width: 100%;
            margin-bottom:10px;
            opacity: 0.8;
          }
          
          /* Add a red background color to the cancel button */
          .form-container .cancel {
            background-color: red;
          }
          
          /* Add some hover effects to buttons */
          .form-container .btn:hover, .open-button:hover {
            opacity: 1;
          }
    `];

    _renderAvatar() {
        const { avatar_image, name } = (this.profile ||
          {}) as Profile;
        const url = this.newAvatar || avatar_image;
        const avatarImg = url
          ? html`<img id="avatarImg" src="${url}" class="profile"/>`
          : (name || " ").slice(0, 1);
        return html` <div class="profile-container">
          ${avatarImg}
        </div>`;
      }
    
    
    _fetchSongData(path: string) {
        fetch(serverPath(path))
        .then((response) => {
            if (response.status === 200) {
            return response.json();
            }
            return null;
        })
        .then((json: unknown) => {
            if (json) this.songUsing = json as Song[];
        });
    }

    _fetchData(path: string) {
        fetch(serverPath(path))
        .then((response) => {
            if (response.status === 200) {
            return response.json();
            }
            return null;
        })
        .then((json: unknown) => {
            if (json) this.using = json as Profile;
        });
    }

    connectedCallback() {
        if (this.path) {
        this._fetchData(this.path);
        }
        let str = "/song/Kooldude47";
        console.log(str);
        this._fetchSongData(str);
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

    openForm() {
        const formElement = this.shadowRoot?.getElementById('myForm');
        if (formElement) {
          formElement.style.display = 'block';
        }
      }
    
    closeForm() {
    const formElement = this.shadowRoot?.getElementById('myForm');
        if (formElement) {
            formElement.style.display = 'none';
        }
    }

    submitForm(ev: Event) {
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;
        const formdata = new FormData(target);
        const entries = Array.from(formdata.entries())
            .map(([k, v]) => (v === "" ? [k] : [k, v]));

        if (this.newSheetMusic){
            entries.push(["sheet_music", this.newSheetMusic]);
            }
        entries.push(["userid", this.profile.userid])
        
        const json = Object.fromEntries(entries);
        this._postData(json);
    }

    _postData(json: Song) {
        fetch(serverPath("/song"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json)
        });
    }

    _handleSheetMusicSelected(ev: Event) {
        const target = ev.target as HTMLInputElement;
        const selectedFile = (target.files as FileList)[0];
    
        const reader: Promise<string> = new Promise(
          (resolve, reject) => {
            const fr = new FileReader();
            fr.onload = () => resolve(fr.result as string);
            fr.onerror = (err) => reject(err);
            fr.readAsDataURL(selectedFile);
          }
        );
        reader.then((url: string) => (this.newSheetMusic = url));
      }
}

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
    render() {

        const {userid, name, instruments} = (this.profile || {}) as Profile;

        let instrumentList: string;
        if (typeof instruments === 'string') {
            let instrumentArray = JSON.parse(instruments);
            instrumentList = instrumentArray.join(", ");
        }
        else {
            instrumentList = "";
        }
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
                <span>Instruments: </span>
                <input name="instruments" .value=${instrumentList} />
            </label>
            <label>
                <span>Profile Picture: </span>
                <input
                    name="avatar_image"
                    type="file"
                    @change=${this._handleAvatarSelected}
                />
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
            margin-left: 20%;
            margin-right: 20%;
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
          input,
          button {
            font: inherit;
            line-height: inherit;
            margin: 0.25em;
          }`];

    _handleSubmit(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself
        console.log(this.newAvatar);
        const target = ev.target as HTMLFormElement;
        const formdata = new FormData(target);
        const entries = Array.from(formdata.entries())
            .map(([k, v]) => (v === "" ? [k] : [k, v]))
            .map(([k, v]) =>
            k === "instruments"
                ? [k, JSON.stringify((v as string).split(",").map((s) => s.trim()))]
                : [k, v]
            );

        if (this.newAvatar){
        entries.push(["avatar_image", this.newAvatar]);
        }
        entries.push(["date_joined", this.profile.date_joined]);
        const json = Object.fromEntries(entries);
        this._putData(json);
    }

    _handleAvatarSelected(ev: Event) {
        const target = ev.target as HTMLInputElement;
        const selectedFile = (target.files as FileList)[0];
    
        const reader: Promise<string> = new Promise(
          (resolve, reject) => {
            const fr = new FileReader();
            fr.onload = () => resolve(fr.result as string);
            fr.onerror = (err) => reject(err);
            fr.readAsDataURL(selectedFile);
          }
        );
        reader.then((url: string) => (this.newAvatar = url));
      }
    

    _putData(json: Profile) {
    const endpoint = `${this.path}/${this.profile.userid}`
    fetch(serverPath(endpoint), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json)
    })
        .then((response) => {
        if (response.status === 200) return response.json();
        else {
        console.log("HKDJFHJDHFJDHF");
        return null;
        }
        })
        .then((json: unknown) => {
        if (json) this.using = json as Profile;
        })
        .catch((err) =>
        console.log("Failed to PUT form data", err)
        );
    }
}