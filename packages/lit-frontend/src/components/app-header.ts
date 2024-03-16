import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit/context";
import { APIUser } from "../rest";
import { authContext } from "./auth-required";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import "./drop-down";
import "./user-panel";

@customElement("app-header")
export class UserProfileElement extends LitElement {

    @consume({ context: authContext, subscribe: true })
    @property({ attribute: false })
    user = new APIUser();

    render() {
        return html`
        <header>
            <a href="/app">
                <h1>Sheet Share</h1>
            </a>
            <drop-down align="right">
                <img src="/images/dude4.png" class="profile-header"/>
                <user-panel slot="menu" @signOut=${this._signOut} username=${this.user.username}>
                    <span slot="name">${this.user.username}</span>
                </user-panel>
                
            </drop-down>
        </header>
        `;  
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS)
    ]

    _signOut() {
        console.log("Signout");
        this.user.signOut();
      }
}