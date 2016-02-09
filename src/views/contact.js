/* global Marionette, _ */

class ContactEntry extends Marionette.LayoutView {
  constructor(...rest) {
    super(...rest);
    this.template = _.template(require('../templates/contact.html'));
    this.ui = { back: '.back' };
  }
}

export default ContactEntry;
