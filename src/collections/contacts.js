/* global Backbone */

import Contact from '../models/contact';

class Contacts extends Backbone.Collection {
  constructor(...rest) {
    super(...rest);
    this.model = Contact;
  }
}

export default Contacts;
