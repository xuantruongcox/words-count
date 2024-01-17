var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let WordsCount = class WordsCount extends LitElement {
    constructor() {
        super(...arguments);
        this.words = '';
        this.inputEntry = html `
        <textarea cols="50" rows="10" @input=${this.addWords} type='text' placeholder='Enter your words to  count'/></textarea>
    `;
    }
    render() {
        return html `
            <h3>${this.words}</h3>
            <p>Words: ${this.countWords(this.words) || '0'}</p>
            ${this.inputEntry}
        `;
    }
    addWords(e) {
        const input = e.target;
        this.words = input.value;
    }
    countWords(words) {
        return words.trim().split(/\s+/g).filter(a => a.trim().length > 0).length;
    }
};
__decorate([
    property({ type: String })
], WordsCount.prototype, "words", void 0);
WordsCount = __decorate([
    customElement('cox-words-count')
], WordsCount);
export { WordsCount };
