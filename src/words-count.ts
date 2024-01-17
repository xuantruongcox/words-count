import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cox-words-count')
export class WordsCount extends LitElement {

    @property({type: String})
    words = '';

    inputEntry = html`
        <textarea cols="50" rows="10" @input=${this.addWords} type='text' placeholder='Enter your words to  count'/></textarea>
    `
  
    render(){
        return html`
            <h3>${this.words}</h3>
            <p>Words: ${this.countWords(this.words) || '0'}</p>
            ${this.inputEntry}
        `
    }

    addWords(e: Event){
        const input = e.target as HTMLInputElement;
        this.words  = input.value;
    }
    countWords(words: string){
        return words.trim().split(/\s+/g).filter(a=>a.trim().length>0).length;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'words-count': WordsCount
    }
}