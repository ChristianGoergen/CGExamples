
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'liveMessages';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var download_wsserver = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	download_wsserver.click = function download_wsserver_click (event)// @startlock
	{// @endlock
		window.open("http://jwebsocket.org",'_blank');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_download_wsserver", "click", download_wsserver.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
