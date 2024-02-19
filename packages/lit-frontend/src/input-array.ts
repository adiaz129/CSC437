import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("input-array")
export class InputArrayElement extends LitElement {
    @property()
    name: string = "";
    @property({ attribute: false })
    value: string[] = [];
    render() {
        const renderOne = (s: string, i: number) =>
            html`
                <input name=${[this.name, i].join(".")} value=${s} />
                <button class="remove"
                    @click=${() => this._removeInput(i)}>
                    Remove
                </button>
                `;
        return html`${this.value.map(renderOne)}
            <button class="add" @click=${this._addInput}>
                + Add ${this.value.length ? "another" : "one"}
            </button> `;
        }

    _addInput() {
        this.value = this.value.concat([""]);
    }
    _removeInput(i: number) {
        this.value.splice(i, 1);
        this.requestUpdate();
    }
}