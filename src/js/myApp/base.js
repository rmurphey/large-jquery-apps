require([ 
	external stuff
	"jquery/inheritance", 
	"jquery/templating", 
	"jquery/pubsub", 
	"mustache/mustache",
	
	// app-wide stuff
	"common/Messaging"
], function() {
	$(document).ready(function() {
		var pages = {
				'home' : 'pages/home'
			},
			config = pages[$('body').attr('data-page')];

		config && require([ config ]);
	});
});