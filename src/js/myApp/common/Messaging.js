require.def('common/Messaging', [], function() {
	var messaging = {
		animDuration : 500,
		hideDelay : 1500,

		init : function() {
			this.el = $('<div class="message"/>').prependTo('body').hide();
			$.subscribe('/message/notification', $.proxy(this._showMessage, this));
		},

		_showMessage : function(msg) {
			var hide = $.proxy(this._hideMessage, this);

			this.el.append('<p>' + msg + '</p>');

			if (!this.el.is(':visible')) {
				this.el.slideDown(this.animDuration, $.proxy(function() {
					this.showTimeout = setTimeout(hide, this.hideDelay);
				}, this));
			} else {
				clearTimeout(this.showTimeout);
				this.showTimeout = setTimeout(hide, this.hideDelay);
			}
		},

		_hideMessage : function() {
			this.el.slideUp(this.animDuration); 
			this._cleanup();
		},

		_cleanup : function() {
			this.el.empty();
		}
	};
	
	messaging.init();
});