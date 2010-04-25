require([
	"components/searchBox",
	"components/savedSearches",
	"components/searchResults"
], function() {
	new myApp.SearchResults($('#search_results'), {});
	new myApp.SavedSearches($('#saved_searches'), {});
	new myApp.SearchBox($('#search_box'), {});
});