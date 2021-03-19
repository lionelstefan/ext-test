Ext.define('ext-test.view.forms.FormsViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.formsviewcontroller',

  onSubmit: function (editor, value, startValue, eOpts) {
    store.formsviewstore.add(formsview.getValues())
    store.formsviewstore.sync()
  }
});
