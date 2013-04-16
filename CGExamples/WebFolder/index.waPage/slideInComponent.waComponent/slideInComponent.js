isTransitioning = false;


(function Component (id) {// @lock

// Add the code that needs to be shared between components here


function constructor (id) {
		var activeCon = "";

		// get the IDs
		con1 = getHtmlId('con1');
		con2 = getHtmlId('con2');
		// get the position
		con1_top = $$(con1).getPosition().top;
		con1_left = $$(con1).getPosition().left;

	function slideMenu () {

		// this to prevent clicking while still an animation goes on
		isTransitioning = true;
		setTimeout(function(){
			isTransitioning = false;
		}, 600);
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
								//top: '-=500'
								top: con1_top - 500
							 		}, 0, function() {
							 			activeCon = con1;
							 		}
								);
							$('#'+con2).animate({
								left: con1_left
								//left: '+=1000'
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
							left: con1_left
//							left: '+=1000'
							 	}, 0, function() {		
							 		activeCon = con2;
							 	}
							);
						$('#'+con1).animate({
//							top: '-=500'
							top: con1_top - 500

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
//				top: '-=500'
				top: con1_top - 500

			 		}, 0, function() {}
				);
			$('#'+con1).animate({
//				top: '-=500'
				top: con1_top - 500				
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
		if(isTransitioning==false){
		slideMenu();
	}else{};

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock



