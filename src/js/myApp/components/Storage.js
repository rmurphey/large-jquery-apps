myApp.Storage = Class.extend({
	init : function(storeName) {
		this.storeName = storeName;
	},
	
	save : function(value) {
		console.log('fake saving ' + value);
	},
	
	remove : function(value) {
		console.log('fake removing ' + value);
	},
	
	read : function() {
		console.log('returning fake array');
		return [ 'dogs', 'cats', 'javascript' ];
	}
});