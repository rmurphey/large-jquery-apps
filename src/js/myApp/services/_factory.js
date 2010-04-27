myApp.services._factory = Class.extend({
	init : function(opts) {
		var Service = myApp.services._base.extend(opts);
		new Service();
	}
});