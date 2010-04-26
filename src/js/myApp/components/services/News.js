myApp.NewsService = myApp.SearchService.extend({
	service : 'search.news',
	baseUrl : '/data/news.json',
	dataType : 'json',
	fields : [ "title", "url" ],
	
	_filterResults : function(results) {
		$.each(results, function(i, r) {
			r.title = 'News: ' + r.title;
		});
		return results;
	}
});	
