import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { ToggleSwitchElement } from "./toggle-switch";

@customElement("user-panel")
export class UserPanelElement extends LitElement {


  render() {
    return html`
        <ul>
            <li class="header">
                <a href="profile.html">
                    <slot name="name">Your Name</slot>
                </a>
            </li>
            <li>
                <toggle-switch @change=${this._toggleDarkMode}>
                    Dark Mode
                </toggle-switch>
            </li>
            <li><hr /></li>
            <li>
                <slot name="logout">Sign out</slot>
            </li>
        </ul>
    `;
  }

  static styles = css`
    * {
      margin: 0;
      box-sizing: border-box;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-header);
      color: var(--color-text-heading);
      border: 1px solid var(--color-text-heading);
      border-radius: 0.25rem;
      padding: 0.25rem;
      box-shadow: var(--shadow-dropdown);
    }
    li {
      white-space: nowrap;
      border-color: var(--color-accent);
      border-width: 1px;
    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: end;
      line-height: var(--font-line-height-display);
    }
    li:first-child {
      border-bottom-style: solid;
    }
    li:last-child {
      border-top-style: solid;
    }
    img {
      display: inline;
      height: var(--size-icon-large);
    }
    h1 {
      font-size: var(--size-type-mlarge);
      line-height: var(--font-line-height-display);
      white-space: normal;
      text-align: right;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
  `;

  _toggleDarkMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    console.log("Toggling Dark mode", ev);

    if (target?.on) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }
}