var myApp = {}; // create a namespace for us

myApp.bootstrap = function() {
	var page = $('body').attr('data-page');
	
	switch (page) {
		// we could be a lot more clever here, and we should be if we want
		// our build to include mutiple files. but for the sake of this,
		// we're going to be verbose with our require statements so the 
		// build will see them and deal with them.
		case "home" : 
			require([ 
				"components/searchBox", 
				"components/searchResults", 
				"components/savedSearches" 
			]);
			break;
		
		case "login" : 
			require([ "login" ]);
			break;
	}
};

require([ "jquery/inheritance", "jquery/templating", "jquery/pubsub" ], function() {
	$(myApp.bootstrap);
});