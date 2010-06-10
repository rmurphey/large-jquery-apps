require.def('services/Web', [ 'services/_base' ], function(_base) {
	return _base.extend({
		description : 'Web',
		service : 'search.web',
		// baseUrl : '/data/news.json',
		fields : [ 'title', 'url' ],

		_filterResults : function(results) {
			$.each(results, function(i, r) {
				r.title = 'Web: ' + r.title;
				r.type = "web";
			});
			return results;
		}
	});
});