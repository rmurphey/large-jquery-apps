myApp.SavedSearches = Class.extend({
	itemTemplate : '<li data-term="{{term}}">{{term}} <span class="remove">remove</span></li>',
	cookie : 'savedSearches',
	
	init : function(el) {
		this.el = el;

		// create a new store that will hold saved searches;
		// the store must provide three methods: read, save, and remove.
		// the read method must return an array. the save and remove
		// methods should allow for the saving and removing of individual
		// search terms
		this.store = new myApp.Storage('searches');
		
		// when a term is searched for, save it
		$.subscribe('/search/term', $.proxy(this._saveSearch, this));
		
		// event delegation for searching and removing searches
		this.el.delegate('li', 'click', $.proxy(this._doSearch, this));
		this.el.delegate('span.remove', 'click', $.proxy(this._removeSearch, this));

		// fetch saved searches 
		this._loadSavedSearches();
	},
	
	_doSearch : function(e) {
		var target = $(e.target);
		if (target.is('span.remove')) { return; }
		
		var term = target.attr('data-term');
		$.publish('/search/term', [ term ]);
	},
	
	_loadSavedSearches : function() {
		this.terms = this.store.read();
		$.each(this.terms, $.proxy(function(i, term) {
			this._populateList(term);
		}, this));
	},
	
	_saveSearch : function(term) {
		if ($.inArray(term, this.terms) >= 0) { return; }

		this._populateList(term);
		this.store.save(term);
	},
	
	_populateList : function(term) {
		var item = Mustache.to_html(this.itemTemplate, { term : term });
		this.el.append(item);
	},
	
	_removeSearch : function(e) {
		var item = $(e.target).parent().remove(), term = item.attr('data-term');
		this.store.remove(term);
	}
});