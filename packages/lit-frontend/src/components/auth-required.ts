import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createContext, provide } from "@lit/context";
import {
  APIUser,
  AuthenticatedUser,
  FormDataRequest
} from "../rest";

export let authContext = createContext<APIUser>("auth");

@customElement("auth-required")
export class AuthRequiredElement extends LitElement {
  @state()
  loginStatus: number = 0;

  @state()
  registerStatus: number = 0;

  @provide({ context: authContext })
  @state()
  user: APIUser =
    AuthenticatedUser.authenticateFromLocalStorage(() =>
      this._signOut()
    );

  isAuthenticated() {
    return this.user.authenticated;
  }

  firstUpdated() {
    this._toggleDialog(!this.isAuthenticated());
    if (this.isAuthenticated()) {
      this._dispatchUserLoggedIn(
        this.user as AuthenticatedUser
      );
    }
  }

  render() {
    console.log("Rendering auth-required", this.user);

    const dialog = html`
      <dialog>
        <form
          @submit=${this._handleLogin}
          @change=${() => (this.loginStatus = 0)}>
          <h2>Existing User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Sign in</button>
          <p>
            ${this.loginStatus
              ? `Login failed: ${this.loginStatus}`
              : ""}
          </p>
        </form>
        <form
          @submit=${this._handleRegister}
          @change=${(this.registerStatus = 0)}>
          <h2>New User</h2>
          <label>
            <span>Name</span>
            <input name="name" required/>
          </label>
          <label>
            <span>Username</span>
            <input name="username" required/>
          </label>
            <span>Instruments:</span>
              <div>
                <input type="checkbox" id="Guitar" name="instruments" value="Guitar">
                <label for="Guitar">Guitar</label>
              </div><br>
              <div>
                <input type="checkbox" id="Piano" name="instruments" value="Piano">
                <label for="Piano">Piano</label>
              </div><br>
              <div>
                <input type="checkbox" id="Violin" name="instruments" value="Violin">
                <label for="Violin">Violin</label>
              </div>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" required/>
          </label>
          <button type="submit">Register</button>
          <p>
            ${this.registerStatus
              ? `Signup failed: ${this.registerStatus}`
              : ""}
          </p>
          <p></p>
        </form>
      </dialog>
    `;

    return html`
      ${this.isAuthenticated() ? "" : dialog}
      <slot></slot>
    `;
  }

  static styles = css`
    :host {
      display: contents;
    }
    dialog {
      display: flex;
      gap: 4rem;
    }
    form {
      display: grid;
      grid-template-columns: [start] 1fr 2fr [end];
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    form > h2 {
      grid-column: start / end;
      text-align: center;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    button {
      grid-column: 2;
    }
  `;

  _handleLogin(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const request = new FormDataRequest(data);

    request
      .base()
      .post("/login")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          this.loginStatus = res.status;
        }
      })
      .then((json) => {
        if (json) {
          console.log("Authentication:", json.token);
          const authenticatedUser =
            AuthenticatedUser.authenticate(json.token, () =>
              this._signOut()
            );
          this.user = authenticatedUser;
          this._toggleDialog(false);
          this._dispatchUserLoggedIn(authenticatedUser);
          this.requestUpdate();
        }
      });
  }

  _dispatchUserLoggedIn(user: AuthenticatedUser) {
    const userLoggedIn = new CustomEvent("mvu:message", {
      bubbles: true,
      composed: true,
      detail: {
        type: "UserLoggedIn",
        user
      }
    });
    this.dispatchEvent(userLoggedIn);
  }

  _handleRegister(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const username = data.get('username');
    const pwd = data.get('pwd');
    const name = data.get('name');
    const date_joined = new Date();
    const formattedDate = date_joined.toISOString();
    const selectedCheckboxes = form.querySelectorAll<HTMLInputElement>('input[name="instruments"]:checked');
    
    // Extract the values of the selected checkboxes
    const selectedInstruments = Array.from(selectedCheckboxes).map((checkbox) => {
        return checkbox.value;
    });
    // Serialize the array of selected instruments
    const serializedInstruments = JSON.stringify(selectedInstruments);
    
    // Append the serialized instruments to the FormData object
    const credData = new FormData();
    const userData = new FormData();
    if (username !== null && pwd !== null) {
      credData.append('username', username);
      credData.append('pwd', pwd);
    }
    if (username !== null && name !== null) {
      userData.append('userid', username);
      userData.append('name', name);
      userData.append('date_joined', formattedDate);
    }
      userData.append('instruments', serializedInstruments);
    const request = new FormDataRequest(credData);
    const profile = new FormDataRequest(userData);

    request
      .base()
      .post("/signup")
      .then((res) => {
        if (res.ok) {
          console.log("reg success");
          return res.json();
        } else {
          console.log("reg failed");
          console.log("res.status: ", res.status)
          console.log("res: ", res)
          this.registerStatus = res.status;
        }
      })
      .then((json) => {
        console.log("Registration:", json);
        console.log("Rendering auth-required", this.user);
        if (json) {
          console.log("Authentication:", json.token);
          const authenticatedUser =
            AuthenticatedUser.authenticate(json.token, () =>
              this._signOut()
            );
          this.user = authenticatedUser;
          this._toggleDialog(false);
          this._dispatchUserLoggedIn(authenticatedUser);
          this.requestUpdate();
        }
        return profile.base().post("/api/profiles");
      })
      .then((secondResponse) => {
        // Handle response from the second request
        if (secondResponse.ok) {
          console.log("Second request succeeded");
          return secondResponse.json();
        } else {
          console.log("Second request failed");
          // Handle failure
          throw new Error("Second request failed");
        }
      })
      .then((secondJson) => {
        // Handle the response data from the second request
        console.log("Second request data:", secondJson);
      })
      .catch((error) => {
        // Handle any errors that occur in any of the promises
        console.error("Error:", error);
      });
  }

  _toggleDialog(open: boolean) {
    const dialog = this.shadowRoot?.querySelector(
      "dialog"
    ) as HTMLDialogElement | null;
    if (dialog) {
      if (open) {
        console.log("Showing dialog");
        dialog.showModal();
      } else {
        console.log("Closing dialog");
        dialog.close();
      }
    }
  }

  _signOut() {
    this.user = APIUser.deauthenticate(this.user);
    this._toggleDialog(!this.isAuthenticated());
    document.location.reload();
  }
}