// create a namespace for us
var myApp = {
	common : {},
	services : {},
	widgets : {}
}; 

myApp.bootstrap = function() {
	var page = $('body').attr('data-page');
	
	switch (page) {
		case "home" : 
			require([ "pages/home" ]);
			break;
		
		case "login" : 
			require([ "pages/login" ]);
			break;
	}
	
	// new myApp.common.Messaging();
};

// load general dependencies, then figure out what page we're on and start it up
require([ 
	"jquery/inheritance", 
	"jquery/templating", 
	"jquery/pubsub", 
	"mustache/mustache", 
	
	"common/Messaging"
], function() {
	$(myApp.bootstrap);
});