myApp.services.News = myApp.services._base.extend({
	description : 'News',
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
