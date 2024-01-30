import { customElement, property } from '@polymer/decorators';
import '@polymer/iron-icon';
import '@polymer/paper-button';
import { html, PolymerElement } from '@polymer/polymer';
import '@power-elements/lazy-image';
import '../components/markdown/short-markdown';
import { RootState } from '../store';
import { ReduxMixin } from '../store/mixin';
import { initialUiState } from '../store/ui/state';
import { aboutEventBlock } from '../utils/data';
import '../utils/icons';
import './shared-styles';

@customElement('about-event-block')
export class AboutEventBlock extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles flex flex-alignment positioning">
        :host {
          display: block;
        }

        .block:not(:last-of-type) {
          margin-bottom: 32px;
        }

        .team-icon {
          --iron-icon-height: 160px;
          --iron-icon-width: 160px;
          --iron-icon-fill-color: var(--default-primary-color);
          max-width: 50%;
        }

        .image-link {
          width: 80%;
          height: 80%;
        }

        .events-photo {
          --lazy-image-width: 100%;
          --lazy-image-height: 100%;
          --lazy-image-fit: cover;
          width: var(--lazy-image-width);
          height: var(--lazy-image-height);
        }

        .description {
          color: var(--secondary-text-color);
        }

        paper-button {
          margin: 0;
        }
      </style>

      <div class="container" layout horizontal>
        <div layout vertical center-center flex hidden$="[[viewport.isPhone]]">
          <h2>[[aboutEventBlock.eventTitle]]</h2>
          <br>
          <br>

          <a href="/team" class="image-link">
            <lazy-image
              class="events-photo"
              src="[[aboutEventBlock.image]]"
              alt="Event"
            ></lazy-image>
          </a>
        </div>

        <div class="description-block" flex>
          <template is="dom-repeat" items="[[aboutEventBlock.blocks]]" as="block">
            <div layout vertical center-center flex class="block">
              <h2>[[block.title]]</h2>

              <h3>[[block.subTitle]]</h3>

              <short-markdown class="description" content="[[block.description]]"></short-markdown>
              <short-markdown class="description" content="[[block.secondDescription]]"></short-markdown>
              <short-markdown class="description" content="[[block.thirdDescription]]"></short-markdown>

              <template is="dom-if" if="[[block.callToAction.newTab]]">
                <a href="[[block.callToAction.link]]" target="_blank" rel="noopener noreferrer">
                  <paper-button class="cta-button animated icon-right">
                    <span>[[block.callToAction.label]]</span>
                    <iron-icon icon="hoverboard:arrow-right-circle"></iron-icon>
                  </paper-button>
                </a>
              </template>
            </div>
          </template>
        </div>
      </div>
    `;
  }

  private aboutEventBlock = aboutEventBlock;

  @property({ type: Object })
  private viewport = initialUiState.viewport;

  override stateChanged(state: RootState) {
    this.viewport = state.ui.viewport;
  }
}
