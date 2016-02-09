import _ from 'underscore';
import Marionette from 'backbone.marionette';

class ContactEntry extends Marionette.LayoutView {
  constructor(...rest) {
    super(...rest);
    this.template = _.template(require('../templates/contact.html'));
    this.ui = { back: '.back' };
  }
}

export default ContactEntry;
