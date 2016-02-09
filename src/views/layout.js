import _ from 'underscore';
import { LayoutView } from 'backbone.marionette';

import ContactList from './list';
import ContactEntry from './contact';

class Layout extends LayoutView {
  constructor(...rest) {
    super(...rest);
    rest.forEach(function (item) {
      if (typeof item === 'object') {
        _.extend(this, item);
      }
    });
  }

  template() {
    return _.template(require('../templates/index.html'));
  }

  regions() {
    return {
      layout: '.layout-hook'
    };
  }

  onShowContactList() {
    const contactList = new ContactList({ collection: this.collection });
    this.showChildView('layout', contactList);

    Backbone.history.navigate('');
  }

  onShowContactEntry(entry) {
    const model = this.collection.get(entry);
    this.showContact(model);
  }

  onChildviewSelectEntry(child, model) {
    this.showContact(model);
  }

  onChildviewShowContactList() {
    this.triggerMethod('show:contact:list');
  }

  /** Share some simple logic from our subviews */
  showContact(model) {
    const entry = new ContactEntry({ model });
    this.showChildView('layout', entry);

    Backbone.history.navigate(`contact/${model.id}`);
  }
}

export default Layout;
