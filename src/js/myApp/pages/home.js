require([
	"components/SearchBox",
	"components/SavedSearches",
	"components/SearchResults"
], function() {
	new myApp.SearchResults($('#search_results'), {});
	new myApp.SavedSearches($('#saved_searches'), {});
	new myApp.SearchBox($('#search_box'), {});
});

require([
	"components/SearchService",
	"components/services/News"
], function() {
	new myApp.NewsService();
});