import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import homeCSS from "/src/styles/home.css?inline";
import "../components/user-profile";
import "../components/musician-container";

@customElement("profile-page")
export class ProfilePageElement extends LitElement {
    render() {
        return html`
        <main>
            <user-profile path="/profiles/deedoo2"></user-profile>
        </main>
    `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(homeCSS)
    ];
}
