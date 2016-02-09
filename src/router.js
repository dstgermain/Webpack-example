import { AppRouter } from 'backbone.marionette';

import IndexController from './controllers/indexController';

const Router = AppRouter.extend({
  appRoutes: {
    '': 'contactList',
    'contact/:id': 'contactEntry'
  },
  initialize() {
    const initialData = this.getOption('initialData');
    this.controller = new IndexController({ initialData });
  }
});

export default Router;
