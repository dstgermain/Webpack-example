/* Global Backbone */

class Contact extends Backbone.Model {
  constructor(...rest) {
    super(...rest);
  }
  defaults() {
    return {
      id: 0,
      status: '',
      first_name: '',
      last_name: '',
      confirmed: '',
      email_addresses: [],
      addresses: [],
      notes: [],
      company_name: '',
      home_phone: '',
      work_phone: '',
      cell_phone: '',
      fax: '',
      custom_fields: '',
      lists: [],
      created_date: new Date(),
      modified_date: new Date(),
      source_details: ''
    };
  }
  idAttribute() {
    return this.defaults().id;
  }
}

export default Contact;
