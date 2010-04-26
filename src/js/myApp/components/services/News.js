require([ 'components/SearchService' ], function() {
	myApp.NewsService = myApp.SearchService.extend({
		service : 'search.news',
		
		_filterResults : function(results) {
			$.each(results, function(r) {
				r.title = 'News: ' + r.title;
			});
		}
	});	
});
