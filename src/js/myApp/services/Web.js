myApp.services.Web = myApp.services._base.extend({
	service : 'search.web',
	baseUrl : '/data/news.json',
	dataType : 'json',
	
	_filterResults : function(results) {
		$.each(results, function(i, r) {
			r.title = 'Web: ' + r.title;
			r.type = "web";
		});
		return results;
	}
});	
