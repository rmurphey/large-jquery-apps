myApp.services._factory = Class.extend({
	init : function(opts) {
		var C = myApp.services._base.extend(opts);
		new C();
	}
});