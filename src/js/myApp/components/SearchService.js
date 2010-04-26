myApp.SearchService = Class.extend({
	description : 'YQL Search Service',
	// baseUrl : 'http://query.yahooapis.com/v1/public/yql?callback=?',
	baseUrl : '/data/news.json',
	service : 'search.web',
	fields : [ 'title', 'abstract', 'url' ],
	// dataType : 'jsonp',
	dataType : 'json',
	
	init : function(opts) {
		$.subscribe('/search/term', $.proxy(this._doSearch, this));
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
		$.ajax({
			url : this.baseUrl,
			dataType : this.dataType,
			data : this._buildQuery(term),
			success : this._handleResponse,
			error : this._handleError,
			context : this		
		});
	},
	
	_handleResponse : function(resp) {
		var results = resp.query.results.result;

		// yql doesn't return an array when there's only one result;
		// let's force the results to be an array no matter what
		this.results = this._filterResults(results.length ? results : [ results ]);
		this._broadcastResults();
	},
	
	_filterResults : function(results) {
		// placeholder function that other services can attach to
		return results;
	},
	
	_broadcastResults : function() {
		$.publish('/search/results', [ this.results ]);
	},
	
	_handleError : function(xhr, status, exception) {
		$.publish('/message/error', [ { 
			status : status, 
			msg : 'There was an issue loading data for ' + this.description
		}]);
	}
});