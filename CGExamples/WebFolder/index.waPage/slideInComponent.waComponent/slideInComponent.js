var activeCon = "";



(function Component (id) {// @lock

// Add the code that needs to be shared between components here


function constructor (id) {
	

	function slideMenu () {
		// get the IDs
		con1 = getHtmlId('con1');
		con2 = getHtmlId('con2');
		// move the container to the start possition (mostly not visible)
		if(activeCon != ""){
			if(activeCon == con2){
				$('#'+con1).animate({
					top: '+=500'
					 	}, 500, function() {		
					 		activeCon = con1;
					 	}
					);
				$('#'+con2).animate({
					left: '-=1000'
				 		}, 500, function() {
							$('#'+con2).animate({
								top: '-=500'
							 		}, 0, function() {
							 			activeCon = con1;
							 		}
								);
							$('#'+con2).animate({
								left: '+=1000'
							 		}, 0, function() {
							 			activeCon = con1;
							 		}
								);	 			
				 		}
					);
			}else{
				$('#'+con1).animate({
					left: '-=1000'
					 	}, 500, function() {
						$('#'+con1).animate({
							left: '+=1000'
							 	}, 0, function() {		
							 		activeCon = con2;
							 	}
							);
						$('#'+con1).animate({
							top: '-=500'
							 	}, 0, function() {		
							 		activeCon = con2;
							 	}
							);	
					 	}
							);
				$('#'+con2).animate({
					top: '+=500'
				 		}, 500, function() {
				 			activeCon = con2;
				 		}
					);
				}		
			}
		if (activeCon == ""){
			$('#'+con2).animate({
				top: '-=500'
			 		}, 0, function() {}
				);
			$('#'+con1).animate({
				top: '-=500'
				 	}, 0, function() {
					$('#'+con1).animate({top: '+=500'}, 500, function() {activeCon = con1});
					}
				);
			}
		}
	slideMenu();
	
	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'slideInComponent';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		slideMenu();

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock



