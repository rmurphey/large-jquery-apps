myApp.services.News = myApp.services._base.extend({
	service : 'search.news',
	baseUrl : '/data/news.json',
	dataType : 'json',
	
	_filterResults : function(results) {
		$.each(results, function(i, r) {
			r.title = 'News: ' + r.title;
			r.type = "news";
		});
		return results;
	}
});	
