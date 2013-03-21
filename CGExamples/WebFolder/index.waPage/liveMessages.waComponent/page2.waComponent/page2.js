
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'loadComponent2';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		jWebSocketClient.sendText(sessionId,"Diese Message geht nur an mich selbst!!!!");

	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		if( jWebSocketClient ) {
			jWebSocketClient.close();
		}
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		lMsg = "Hallo Broadcast";
			if( lMsg.length > 0 ) {
			  var lRes = jWebSocketClient.broadcastText(
			    "",   // broadcast to all clients (not limited to a certain pool)
			    lMsg  // broadcast this message
			  );
			  if( lRes.code != 0 ) {
			    // display error
			  }
		}
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		lURL = "ws://localhost:8787/jWebSocket/jWebSocket";
			gUsername = "test";
			lPassword = "";
			

			
			console.log( "Connecting to " + lURL + " and logging in as '" + gUsername + "'..." );
			var lRes = jWebSocketClient.logon( lURL, gUsername, lPassword, {
			  // OnOpen callback
			  OnOpen: function( aEvent ) {
			    console.log( "jWebSocket connection established." );
			  },
			  // OnMessage callback
			  OnMessage: function( aEvent, aToken ) {
			    console.log( "jWebSocket '" + aToken.type + "' token received, full message: '" + aEvent.data  );
			    
			    if (aToken.type == "welcome"){
			    	sessionId = JSON.parse(aEvent.data).sourceId;
			    	}
			  },
			  // OnClose callback
			  OnClose: function( aEvent ) {
			    console.log( "jWebSocket connection closed." );
			  }
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
