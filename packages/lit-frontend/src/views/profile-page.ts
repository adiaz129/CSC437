import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { APIRequest } from "../rest";
import { Profile } from "ts-models";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import homeCSS from "/src/styles/home.css?inline";
import "../components/user-profile";
import "../components/musician-container";

type ProfileLocation = Location & {
    params: { userid: string };
  };

@customElement("profile-page")
export class ProfilePageElement extends LitElement {
    @property({ attribute: false })
    location?: ProfileLocation;

    @property({ reflect: true })
    get userid() {
        return this.location?.params.userid;
    }

    @property({ type: Object }) profileData: Profile | null = null;

    render() {
        return html`
        <main>
            <user-profile .using=${this.profileData}></user-profile>
            <user-profile-edit .using=${this.profileData}></user-profile-edit>
        </main>
    `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
        unsafeCSS(homeCSS)
    ];

    async connectedCallback() {
        super.connectedCallback();
        try {
          const response = await new APIRequest().get(`/profiles/${this.userid}`);
          if (response.status === 200) {
            this.profileData = await response.json() as Profile;
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      }
}
