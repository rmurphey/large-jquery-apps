require([
	"common/Storage",
	"components/SearchBox",
	"components/SearchResults",
	
	"services/_base",
	"services/Web"
], function() {
	new myApp.SearchResults($('#search_results'), {});
	new myApp.SearchBox($('#search_box'), {});

	new myApp.services.Web();
});