import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import "./drop-down";
import "./user-panel";

@customElement("app-header")
export class UserProfileElement extends LitElement {
    render() {
        return html`
        <header>
            <a href="/app/">
                <h1>Sheet Share</h1>
            </a>
            <svg class="icon-search">
                <use href="/icons/placeholder.svg#icon-search" />
            </svg>
            <h2 class="home">Musician Page</h2>
            <h2 class="login">Login | Sign up</h2>
            <drop-down align="right">
                <img src="/images/profile.jpg" class="profile-header"/>
                <user-panel slot="menu">
                    <span slot="name">Andrew Diaz</span>
                </user-panel>
            </drop-down>
        </header>
        `;  
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS)
    ]
}