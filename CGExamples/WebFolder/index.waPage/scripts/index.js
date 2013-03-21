
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	var combobox1 = {};	// @combobox
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$('comp_main').removeComponent();

	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$('comp_main').loadComponent("liveMessages.waComponent");
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		
		$$('comp_main').loadComponent(this.getValue()+".waComponent");
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
// @endregion
};// @endlock
