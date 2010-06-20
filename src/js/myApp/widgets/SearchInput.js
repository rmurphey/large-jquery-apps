require.def('widgets/SearchInput', [], function() {
	return Class.extend({
		term : '',

		init : function(el) {
			this.el = el;
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
});
