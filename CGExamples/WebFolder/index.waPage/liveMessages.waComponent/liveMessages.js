var sessionId = "";

(function Component (id) {// @lock

// Add the code that needs to be shared between components here


function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'liveMessages';
	// @endregion// @endlock
	
	if( jws.browserSupportsWebSockets() ) {
	  jWebSocketClient = new jws.jWebSocketJSONClient();
	  // Optionally enable GUI controls here
	} else {
	  // Optionally disable GUI controls here
	  var lMsg = jws.MSG_WS_NOT_SUPPORTED;
	  alert( lMsg );
	}


	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var download_wsserver = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		//debugger;
		$$('comp_main').loadComponent("liveMessages.waComponent/page2.waComponent");
	};// @lock

	download_wsserver.click = function download_wsserver_click (event)// @startlock
	{// @endlock
		window.open("http://jwebsocket.org",'_blank');
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_download_wsserver", "click", download_wsserver.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
