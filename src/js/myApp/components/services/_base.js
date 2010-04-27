myApp.services = {};

myApp.services._base = Class.extend({
	baseUrl : 'http://query.yahooapis.com/v1/public/yql?callback=?',
	fields : [ 'title', 'abstract', 'url' ],
	dataType : 'jsonp',
	service : '',

	init : function(opts) {
		$.subscribe('/search/term', $.proxy(this._doSearch, this));
		
		this.ajaxOptions = {
			url : this.baseUrl,
			dataType : this.dataType,
			success : this._handleResponse,
			context : this
		};
	},
	
	_buildQuery : function(term) {
		var query = 'select ' + 
					this.fields.join(',') + 
					' from ' + 
					this.service +
					' where query="' + term + '"';
		return { q : query, format : 'json' };
	},
	
	_doSearch : function(term) {
		var config = this._getAjaxConfig(term);
		$.ajax(config);
	},
	
	_getAjaxConfig : function(term) {
		return $.extend({}, this.ajaxOptions, { data : this._buildQuery(term) });
	},
	
	_handleResponse : function(resp) {
		var results = this._filterResults( this._normalizeResults(resp.query.results.result) );
		$.publish('/search/results', [ results ]);
	},
	
	_normalizeResults : function(results) {
		// deal with the fact that YQL doesn't return an array 
		// if there's only one result
		return results.length ? results : [ results ];
	},
	
	_filterResults : function(results) {
		// placeholder for subclasses to modify the results set
		// before it's broadcast
		return results;
	}
});