myApp.widgets.Tools = Class.extend({
	itemTemplate : '<li>' +
		'<input type="checkbox" name="{{description}}" checked>' +
		'<label for="{{description}}">{{description}}</label>' +
	'</li>',
	
	services : [],
	
	init : function(el) {
		this.el = el;
		this.el.delegate('input', 'click', $.proxy(this._handleChoice, this));
		
		$.subscribe('/service/add', $.proxy(this._handleAdd, this));
	},
	
	_handleChoice : function(e) {
		var input = $(e.target),
			service = input.attr('name');
			
		$.publish('/service/' + service + '/toggle', [ input.is(':checked') ]);
	},
	
	_handleAdd : function(service) {
		if ($.inArray(service, this.services) >= 0) { return; }
		
		var html = Mustache.to_html(this.itemTemplate, { description : service });
		this.el.append(html);
	}
});