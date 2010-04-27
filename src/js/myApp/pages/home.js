require([
	"common/Storage",
	"components/SearchBox",
	"components/SearchResults"
], function() {
	new myApp.SearchResults($('#search_results'), {});
	new myApp.SearchBox($('#search_box'), {});
});

require([
	"services/_base",
	"services/Web"
], function() {
	new myApp.services.Web();
});