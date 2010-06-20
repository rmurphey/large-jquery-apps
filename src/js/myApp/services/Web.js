require.def('services/Web', [ 'services/_Service' ], function(_Service) {
	var web = $.extend(_Service, {
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
