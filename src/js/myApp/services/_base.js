require.def('services/_base', [], function() {
	return Class.extend({
		description : '',
		baseUrl : 'http://query.yahooapis.com/v1/public/yql?callback=?',
		fields : [ 'title', 'abstract', 'url' ],
		dataType : 'jsonp',
		format : 'json',
		service : '',
		enabled : true,

		init : function(opts) {
			this.ajaxOptions = {
				url : this.baseUrl,
				dataType : this.dataType,
				success : this._handleResponse,
				context : this
			};

			$.subscribe('/search/term', $.proxy(this._doSearch, this));
			$.subscribe('/service/' + this.description + '/toggle', $.proxy(this._toggle, this));
			$.publish('/service/add', [ this.description ]);
			$.publish('/message/notification', [ 'Service ' + this.description + ' added' ]);
		},

		_toggle : function(enabled) {
			this.enabled = enabled;
		},

		_buildQuery : function(term) {
			if (!this.service) { throw('No YQL service defined for request.'); }

			return 'select ' + 
				this.fields.join(',') + 
				' from ' + 
				this.service +
				' where query="' + term + '"';
		},

		_doSearch : function(term) {
			if (!this.enabled) { return; }
			$.ajax(this._getAjaxConfig(term));
		},

		_getAjaxConfig : function(term) {
			return $.extend(
				{}, 
				this.ajaxOptions, 
				{ data : { q : this._buildQuery(term), format : this.format } }
			);
		},

		_handleResponse : function(resp) {
			var results = this._filterResults( this._normalizeResults(resp.query.results.result) );
			$.publish('/search/results', [ results, this.description ]);
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
});
