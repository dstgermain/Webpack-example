import _ from 'underscore';
import { LayoutView } from 'backbone.marionette';

class ContactEntry extends LayoutView {
  constructor(...rest) {
    super(...rest);
    this.template = _.template(require('../templates/contact.html'));
    this.ui = { back: '.back' };
  }
}

alert('foo');

export default ContactEntry;
