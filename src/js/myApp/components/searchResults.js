myApp.SearchResults = Class.extend({
	
	
	init : function(el, opts) {
		this.el = el;
		$.subscribe('/search/term', $.proxy(this._clear, this));
		$.subscribe('/search/results', $.proxy(this._showResults, this));
	},
	
	_clear : function(term) {
		this.el.empty();
	},
	
	_showResults : function(results) {
		$.each(results, function(i, r) {
			
		});
	}
});