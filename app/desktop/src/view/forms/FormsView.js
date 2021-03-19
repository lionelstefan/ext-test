Ext.define('ext-test.view.forms.FormsView',{
  extend: 'Ext.form.Panel',
  xtype: 'formsview',
  cls: 'formsview',
  controller: {type: 'formsviewcontroller'},
  viewModel: {type: 'formsviewmodel'},
  store: {type: 'formsviewstore'},
  title: 'Test Form',
  height: 350,
  width: 300,
  bodyPadding: 10,
  defaultType: 'textfield',
  items: [
      {
          fieldLabel: 'First Name',
          name: 'firstName'
      },
      {
          fieldLabel: 'Last Name',
          name: 'lastName'
      },
      {
          xtype: 'datefield',
          fieldLabel: 'Date of Birth',
          name: 'birthDate'
      }
  ],
  listeners: {
    submit: 'onSubmit'
  }
});
