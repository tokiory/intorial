import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { codeToHtml, BundledTheme } from 'shiki'

@customElement('intorial-code')
export default class IntorialCode extends LitElement {
  @property({attribute: false})
  code: string = ""

  @property({attribute: true})
  lang = ""

  @property({attribute: true})
  theme: BundledTheme = "vitesse-dark"

  async firstUpdated(_changedProperties: PropertyValues) {
    const textNode = this.shadowRoot?.querySelector('slot')?.assignedNodes({flatten: true})[0]

    if (!textNode) return

    this.code = await codeToHtml(textNode.textContent?.trim() || "", {
      lang: this.lang,
      theme: this.theme
    })
  }

  static styles = css`
    .code {
      overflow: hidden;
      border-radius: 8px;
    }
    
    .code > pre {
      padding: 12px;
      margin: 0;
    }
  `

  render() {
    return html`
      <div style="display: none;">
        <slot></slot>
      </div>
      <div class="code">
        ${unsafeHTML(this.code)}
      </div>
    `
  }
}
