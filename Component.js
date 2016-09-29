sap.ui.define([
	"sap/ui/core/UIComponent" 
], function (UIComponent) {
	"use strict";
    
    // extend the core Component with our own logic
	return UIComponent.extend("com.wot.bootstrap.Component", { 

	metadata : {
		manifest: "json"   //app descriptor has to implemented in a separate step
	},

	init : function () {
		// call the init function of the parent, override with our own
		UIComponent.prototype.init.apply(this, arguments);
	
		// create the views based on the url/hash
		this.getRouter().initialize();
	
		// additional initialization can be done here
}

	});
});