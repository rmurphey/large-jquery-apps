require([ 
	// external stuff
	"jquery/inheritance", 
	"jquery/templating", 
	"jquery/pubsub", 
	"mustache/mustache",
	
	// app-wide stuff
	"common/Messaging"
], function() {
	$(document).ready(function() {
		var page = $('body').attr('data-page');

		switch (page) {
			case "home" : 
				require([ "pages/home" ]);
				break;

			case "login" : 
				require([ "pages/login" ]);
				break;
		}
	});
});