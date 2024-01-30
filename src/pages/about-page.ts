import { customElement, property } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
import '../components/hero/simple-hero';
import '../components/markdown/remote-markdown';
import '../elements/footer-block';
import { about, heroSettings } from '../utils/data';
import { updateMetadata } from '../utils/metadata';
import '../elements/subscribe-block';
import '../elements/about-event-block';
@customElement('about-page')
export class FaqPage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <simple-hero page="about"></simple-hero>

      <remote-markdown toc path="[[source]]"></remote-markdown>

      <about-event-block></about-event-block>
      <subscribe-block></subscribe-block>
      <footer-block></footer-block>
    `;
  }

  private heroSettings = heroSettings.about;

  @property({ type: String })
  source = about;

  override connectedCallback() {
    super.connectedCallback();
    updateMetadata(this.heroSettings.title, this.heroSettings.metaDescription);
  }
}
