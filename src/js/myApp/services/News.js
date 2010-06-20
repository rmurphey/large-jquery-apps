require.def('services/News', [ 'services/_Service' ], function(_Service) {
	var news = $.extend(_Service, {
		description : 'News',
		service : 'search.news',
		dataType : 'jsonp',

		_filterResults : function(results) {
			$.each(results, function(i, r) {
				r.title = 'News: ' + r.title;
				r.type = "news";
			});
			return results;
		}
	});
	
	news.init();
});
