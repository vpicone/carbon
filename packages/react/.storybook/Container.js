import React, { Component } from 'react';
import './polyfills';
import './_container.scss';
import { settings } from 'carbon-components';

import 'carbon-components/src/components/button/_button.scss';
import 'carbon-components/src/components/copy-button/_copy-button.scss';
import 'carbon-components/src/components/file-uploader/_file-uploader.scss';
import 'carbon-components/src/components/checkbox/_checkbox.scss';
import 'carbon-components/src/components/combo-box/_combo-box.scss';
import 'carbon-components/src/components/radio-button/_radio-button.scss';
import 'carbon-components/src/components/toggle/_toggle.scss';
import 'carbon-components/src/components/search/_search.scss';
import 'carbon-components/src/components/select/_select.scss';
import 'carbon-components/src/components/text-input/_text-input.scss';
import 'carbon-components/src/components/text-area/_text-area.scss';
import 'carbon-components/src/components/number-input/_number-input.scss';
import 'carbon-components/src/components/form/_form.scss';
import 'carbon-components/src/components/link/_link.scss';
import 'carbon-components/src/components/list-box/_list-box.scss';
import 'carbon-components/src/components/list/_list.scss';
import 'carbon-components/src/components/data-table/_data-table.scss';
import 'carbon-components/src/components/structured-list/_structured-list.scss';
import 'carbon-components/src/components/code-snippet/_code-snippet.scss';
import 'carbon-components/src/components/overflow-menu/_overflow-menu.scss';
import 'carbon-components/src/components/content-switcher/_content-switcher.scss';
import 'carbon-components/src/components/date-picker/_date-picker.scss';
import 'carbon-components/src/components/dropdown/_dropdown.scss';
import 'carbon-components/src/components/loading/_loading.scss';
import 'carbon-components/src/components/modal/_modal.scss';
import 'carbon-components/src/components/multi-select/_multi-select.scss';
import 'carbon-components/src/components/notification/_inline-notification.scss';
import 'carbon-components/src/components/notification/_toast-notification.scss';
import 'carbon-components/src/components/tooltip/_tooltip.scss';
import 'carbon-components/src/components/tabs/_tabs.scss';
import 'carbon-components/src/components/tag/_tag.scss';
import 'carbon-components/src/components/pagination/_pagination.scss';
import 'carbon-components/src/components/accordion/_accordion.scss';
import 'carbon-components/src/components/progress-indicator/_progress-indicator.scss';
import 'carbon-components/src/components/breadcrumb/_breadcrumb.scss';
import 'carbon-components/src/components/toolbar/_toolbar.scss';
import 'carbon-components/src/components/time-picker/_time-picker.scss';
import 'carbon-components/src/components/slider/_slider.scss';
import 'carbon-components/src/components/tile/_tile.scss';
import 'carbon-components/src/components/skeleton/_skeleton.scss';
import 'carbon-components/src/components/inline-loading/_inline-loading.scss';
import 'carbon-components/src/components/pagination-nav/_pagination-nav.scss';

const { prefix } = settings;
export default class Container extends Component {
  componentDidMount() {
    if (process.env.CARBON_REACT_STORYBOOK_USE_RTL === 'true') {
      document.documentElement.dir = 'rtl';
    }
  }

  render() {
    const { story } = this.props;
    return (
      <React.StrictMode>
        <div
          data-floating-menu-container
          role="main"
          style={{
            padding: '3em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {story()}
        </div>
        <input
          aria-label="input-text-offleft"
          type="text"
          className={`${prefix}--visually-hidden`}
        />
      </React.StrictMode>
    );
  }
}
