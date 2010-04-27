myApp.services.Web = myApp.services._base.extend({
	description : 'Web',
	service : 'search.web',
	baseUrl : '/data/news.json',
	dataType : 'json',
	fields : [ 'title', 'url' ],
	
	_filterResults : function(results) {
		$.each(results, function(i, r) {
			r.title = 'Web: ' + r.title;
			r.type = "web";
		});
		return results;
	}
});	
