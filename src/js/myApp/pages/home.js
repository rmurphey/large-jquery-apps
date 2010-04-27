require([
	"common/Storage",
	
	"widgets/SearchInput",
	"widgets/Results",
	
	"services/_base",
	"services/Web",
	"services/News"
], function() {
	new myApp.widgets.Results($('#search_results'));
	new myApp.widgets.SearchInput($('#search_box'));

	// new myApp.services.Web();
	// new myApp.services.News();
});