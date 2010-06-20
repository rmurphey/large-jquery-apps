require.def('widgets/Results', [], function() {
	return Class.extend({
		itemTemplate : '<li class="{{type}}">' +
			'<h3><a href="{{url}}">{{title}}</a></h3>' +
			'{{#abstract}}<p class="abstract">{{abstract}}</p>{{/abstract}}' +
		'</li>',

		init : function(el) {
			this.el = el;

			$.subscribe('/search/term', $.proxy(this._clear, this));
			$.subscribe('/search/results', $.proxy(this._showResults, this));
		},

		_clear : function() {
			this.el.empty();
		},

		_showResults : function(results) {
			var html = '', 
				template = this.itemTemplate;

			$.each(results, function(i, r) {
				r.type = r.type || '';
				html += Mustache.to_html(template, r);
			});

			this.el.append(html);
		}
	});
});
