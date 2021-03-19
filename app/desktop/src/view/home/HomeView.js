Ext.define('ext-test.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `
	<div>
		<h2>Using ExtJS 7.3.0</h2>
	</div>
	<div>
		<p>
			Test App for Fresnel
		</p>
	</div>
	<div>
		<p>
			Source on app/desktop/src
		</p>
	</div>
	`
});