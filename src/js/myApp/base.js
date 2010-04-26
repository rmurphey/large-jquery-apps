var myApp = {}; // create a namespace for us

myApp.bootstrap = function() {
	var page = $('body').attr('data-page');
	
	switch (page) {
		// we could be a lot more clever here, and we should be if we want
		// our build to include mutiple files. but for the sake of this,
		// we're going to be write out our require statements so the 
		// build will see them and deal with them.
		case "home" : 
			require([ "pages/home" ]);
			break;
		
		case "login" : 
			require([ "pages/login" ]);
			break;
	}
};

// load general dependencies, then figure out what page we're on and start it up
require([ 
	"jquery/inheritance", 
	"jquery/templating", 
	"jquery/pubsub", 
	"mustache/mustache", 
	"components/Messaging",
	"components/Storage"
], function() {
	$(myApp.bootstrap);
});