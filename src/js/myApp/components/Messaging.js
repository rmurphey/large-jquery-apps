myApp.Messaging = Class.extend({
	init : function() {
		this.el = $('<div class="message"/>').prependTo('body').hide();
		
		$.subscribe('/message/error', $.proxy(this._showError, this));
		$.subscribe('/message/notification', $.proxy(this._showMessage, this));
	},
	
	_showError : function(error, msg) {
		this._showMessage(msg + ' (' + error + ')');
		this.el.addClass('error');
	},
	
	_showMessage : function(msg) {
		this.el
			.html(msg)
			.slideDown(500, $.proxy(function() {
				setTimeout($.proxy(function() { 
					this.el.slideUp(500); 
					this._cleanup();
				}, this), 1500);
			}, this));
	},
	
	_cleanup : function() {
		this.el.removeClass('error');
		this.el.empty();
	}
});