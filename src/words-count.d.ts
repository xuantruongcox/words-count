import { LitElement } from 'lit';
export declare class WordsCount extends LitElement {
    words: string;
    inputEntry: import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    addWords(e: Event): void;
    countWords(words: string): number;
}
declare global {
    interface HTMLElementTagNameMap {
        'words-count': WordsCount;
    }
}
//# sourceMappingURL=words-count.d.ts.map