myApp.widgets.SearchInput = Class.extend({
	options : {},
	term : '',
	
	init : function(el, opts) {
		this.el = el;
		this.options = $.extend(this.options, opts);
		this._setup();
	},
	
	_setup : function() {
		this.el.bind('keyup', $.proxy(this._handleKeyup, this));
	},
	
	_handleKeyup : function(e) {
		// this is hacky code for demo purposes only
		var val = $.trim(this.el.val());

		if (e.which !== 13 || val == this.term) { return; }
		$.publish('/search/term', [ val ]);

		this.el.blur();
	}
});