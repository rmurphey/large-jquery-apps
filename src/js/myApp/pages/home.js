require([
	"components/SearchBox",
	"components/SearchResults"
], function() {
	new myApp.SearchResults($('#search_results'), {});
	new myApp.SearchBox($('#search_box'), {});
});

require([
	"components/services/_base",
	"components/services/Web"
], function() {
	new myApp.services.Web();
});