import {LitElement, html, css} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('intorial-demo')
export default class Demo extends LitElement {
  static styles = css`
    .banner {
      display: block;
      margin: 0 auto 24px;
      max-width: 100%;
    }
  `

  render() {
    return html`
      <img class="banner" src="/banner.svg" />
      <h1>Intorial playground</h1>
      <p>This page is needed only to test the capabilities of the components, as well as to develop new components.</p>
      <p>This page <strong>is not documentation</strong>.</p>
    `
  }
}
