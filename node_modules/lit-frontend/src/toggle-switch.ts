import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("toggle-switch")
export class ToggleSwitchElement extends LitElement {
  @property({ reflect: true, type: Boolean })
  on: boolean = false;

  render() {
    return html`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`;
  }

  static styles = css`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      line-height: 2em;
      cursor: pointer;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--color-box-background);
      border-radius: 0.75em;
      background-color: var(--color-background-page);
      height: 1.5em;
      width: 3.25em;
      position: relative;
      transition: background-color
        var(--time-transition-control);
    }
    .slider:has(input:checked) {
      background-color: var(--color-text-heading);
    }
    input {
      appearance: none;
      cursor: pointer;
      background-color: var(--color-text);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      transition: left var(--time-transition-control);
    }
    input:checked {
      left: 1.5em;
    }
  `;

  _handleChange(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const composedEvent = new Event(ev.type, {
      bubbles: true,
      composed: true
    });

    this.on = target?.checked;
    this.dispatchEvent(composedEvent);
  }
}