import _ from 'underscore';
import Marionette from 'backbone.marionette';

class Entry extends Marionette.ItemView {
  constructor(...rest) {
    super(...rest);
    this.template = _.template(require('../templates/item.html'));
    this.triggers = {
      click: 'select:entry'
    };
  }
  render() {
    this.setElement(this.template(this.model.toJSON()));
  }
}

class ContactList extends Marionette.CompositeView {
  constructor(...rest) {
    super(...rest);
    this.template = _.template('<table><thead>' +
       '<th><div><span>Name</span></div></th>' +
       '<th><div><span>Email</span></div></th>' +
       '<th><div><span>Created</span></div></th>' +
       '</thead><tbody></tbody></table>');
    this.childView = Entry;
    this.childViewContainer = 'tbody';
  }

  onChildviewSelectEntry(child) {
    this.triggerMethod('select:entry', child.model);
  }
}

export default ContactList;
