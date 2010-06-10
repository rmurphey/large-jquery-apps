require.def('services/News', [ 'services/_base' ], function(_base) {
	var news = $.extend(_base, {
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