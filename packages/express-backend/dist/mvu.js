"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noUpdate = exports.updateProps = exports.Dispatch = exports.View = exports.Main = void 0;
const lit_1 = require("lit");
class Main extends lit_1.LitElement {
    constructor(update, getModel, setModel) {
        super();
        this.updateFn = update;
        this.getModel = getModel;
        this.setModel = setModel;
        this.addEventListener("mvu:message", (ev) => {
            const msg = ev.detail;
            console.log("Got message: ", msg);
            this.receive(msg);
        });
    }
    receive(msg) {
        const next = this.updateFn(this.getModel(), msg);
        const promise = next;
        if (typeof (promise === null || promise === void 0 ? void 0 : promise.then) === "function") {
            // result is a promise
            promise.then((mapFn) => {
                const next = mapFn(this.getModel());
                console.log("Updating model in Promise:", next);
                this.setModel(next);
            });
        }
        else {
            console.log("Updating model:", next);
            this.setModel(next);
        }
    }
}
exports.Main = Main;
class View extends lit_1.LitElement {
    dispatchMessage(msg, target = this) {
        const ev = new CustomEvent("mvu:message", {
            bubbles: true,
            composed: true,
            detail: msg
        });
        target.dispatchEvent(ev);
    }
}
exports.View = View;
class Dispatch {
    constructor() {
        this._handlers = new Map();
        this.update = this._update.bind(this);
    }
    addMessage(type, handler) {
        console.log("Message added for dispatch:", type);
        this._handlers.set(type, handler);
    }
    _update(model, msg) {
        const { type } = msg;
        const handler = this._handlers.get(type);
        return handler ? handler(msg, model) : model;
    }
}
exports.Dispatch = Dispatch;
function updateProps(props) {
    return (m) => Object.assign({}, m, props);
}
exports.updateProps = updateProps;
function noUpdate(m) {
    return m;
}
exports.noUpdate = noUpdate;
