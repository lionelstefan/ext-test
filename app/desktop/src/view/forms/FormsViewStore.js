Ext.define('ext-test.view.forms.FormsViewStore', {
  extend: 'Ext.data.Store',
  alias: 'store.formsviewstore',
  fields: [
    'firstName', 'lastName', 'birthDate'
  ],
  groupField: 'dept',
  data: { items: []},
  proxy: {
      type: 'memory',
      reader: {
          type: 'json',
          rootProperty: 'items'
      }
  }
});
