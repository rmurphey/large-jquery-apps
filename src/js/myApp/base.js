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
		var page = $('body').attr('data-page'), 
			pages = {
				home : 'pages/home'
			},
			config = pages[page];

		config && require([ config ]);
	});
});