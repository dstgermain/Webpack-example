import { Controller, RegionManager } from 'backbone.marionette';

import Contacts from '../collections/contacts';
import LayoutView from '../views/layout';

class IndexController extends Controller {
  initialize() {
    this.options.regionManager = new RegionManager({
      regions: {
        main: '#app-hook'
      }
    });

    const initialData = this.getOption('initialData');

    const layout = new LayoutView({
      collection: new Contacts(initialData.results)
    });

    this.getOption('regionManager').get('main').show(layout);

    /** We want easy access to our root view later */
    this.options.layout = layout;
  }

  contactList() {
    const layout = this.getOption('layout');
    layout.triggerMethod('show:contact:list');
  }

  contactEntry(entry) {
    const layout = this.getOption('layout');
    layout.triggerMethod('show:contact:entry', entry);
  }
}

export default IndexController;
