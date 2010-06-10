require.def('services/Web', [ 'services/_base' ], function(_base) {
	var web = $.extend(_base, {
		description : 'Web',
		service : 'search.web',
		fields : [ 'title', 'url' ],

		_filterResults : function(results) {
			$.each(results, function(i, r) {
				r.title = 'Web: ' + r.title;
				r.type = "web";
			});
			return results;
		}
	});
	
	web.init();
});