import { customElement } from '@polymer/decorators';
import '@polymer/paper-icon-button';
import { html, PolymerElement } from '@polymer/polymer';
import { share } from '../utils/share';

@customElement('footer-social')
export class FooterSocial extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles flex flex-alignment">
      :host {
        padding-left: 4px;
        margin: 0 20px 0 20px;
        display: block;
      }

      .title {
        display: inline-block;
        text-transform: uppercase;
        font-weight: 500;
        margin: 0;
        color: var(--footer-text-color);
      }

      .nav-inline li a {
        padding: 0;
      }

      .nav-inline {
        display: inline;
        margin: 0 55px 0 4px;
      }

      ul.nav-inline {
        padding-left: 10px;
      }

      .nav-inline li {
        display: inline-block;
      }

     .social-group.share-block {
        margin-bottom: 17px;
      }

      .share {
        height: 30px;
        padding: 8px;
        width: 35px;
        display: inline-block;
        margin: 0;
      }

      .share-twitter {
        color: var(--twitter-color);
      }

      .share-facebook {
        color: var(--facebook-color);
      }

      a {
        display: inline-block;
        margin: 0;
        color: var(--footer-text-color);
        text-decoration: none;
      }

      .social-group {
        margin-right: 0;
        margin-bottom: 10px;
        padding-top: 0;
      }

      .email {
        margin-bottom: 20px;
        width: 85px;
      }

      .email .title {
        padding-right: 0;
        padding-top: 17px;
      }

      .email a {
        border-bottom: 1px solid var(--footer-text-color);
        padding-bottom: 1px;
      }

      .social-networks {
        margin-bottom: -10px;
      }

      .social-networks,
      .blog {
        padding-top: 0;
      }

      .social-networks ul {
        list-style-type: disc;
      }

      .blog .title {
        padding-right: 55px;
      }

      .blog a {
        border-bottom: 1px solid var(--footer-text-color);
        padding-bottom: 1px;
      }

      @media (min-width: 768px) {
        :host {
          margin: 15px 0;
        }
      }

      @media (min-width: 439px) {
        :host {
          display: inline-flex;
        }

        .social-group,
        .social-networks,
        .email {
          margin-bottom: 0;
        }

        .social-group {
          margin-right: 0;
        }

        .social-networks {
          padding-top: 8px;
        }

        .blog {
          padding-top: 17px;
        }
      }

    </style>

    <div class="social-group share-block">
      <div class="title">{$ share $}</div>
      <div class="nav-inline">
        <div class="share">
          <paper-icon-button
            class="share-facebook"
            icon="hoverboard:facebook"
            share="facebook"
            on-click="share">
          </paper-icon-button>
        </div>
        <div class="share">
          <paper-icon-button
            class="share-twitter"
            icon="hoverboard:twitter"
            share="twitter"
            on-click="share">
          </paper-icon-button>
        </div>
      </div>
    </div>

    <div class="social-group blog">
      <div class="title">
        {$ followOur $}
        <a
          href="{$ organizer.blog $}"
          {% if organizer.blog.startsWith('http') %} target="_blank" rel="noopener noreferrer" {% endif %}>
          {$ footer.blog $}
        </a>
      </div>
    </div>

    <div class="social-group social-networks">
      <div class="title">{$ followUs $} </div>
      <ul class="nav-inline">
        {% for socFollow in socialNetwork.follow %}
          <li>
            <a
              href="{$ socFollow.url $}"
              target="_blank"
              rel="noopener noreferrer">
              <paper-icon-button icon="hoverboard:{$ socFollow.name $}"></paper-icon-button>
            </a>
          </li>
        {% endfor %}
      </ul>
    </div>

    <div class="social-group email">
      <div class="title">
        <a aria-label="{$ emailUs $}" href="mailto:{$ mailto $}">{$ emailUs $}</a>
      </div>
    </div>
`;
  }

  share(e: PointerEvent) {
    return share(e);
  }
}
