var debounce = require("debounce"),
	element;

module.exports = function(window, document) {
	
	return {
		add: function() {
			
			if(!element) {

				element_in_dom = document.getElementById("main-canvas");

				if(element_in_dom) {
					element = element_in_dom;
				} else {
					element = document.createElement("canvas");
				}

				element.id = "main-canvas";
				
				if(!element_in_dom)
					document.body.appendChild(element);
			}
			
			// Add window listener
			this._windowListener = debounce(this.fitCanvasToScreen, 300);
			window.addEventListener('resize', this._windowListener, false);
			
			this.fitCanvasToScreen();
			
		},
		
		fitCanvasToScreen: function() {
			var height = window.innerHeight,
				width  = window.innerWidth;
		
			// This makes our canvas retina ready
			element.width 	= width*2;
			element.height 	= height*2;
		
			element.style.width  	= width+"px";
			element.style.height 	= (height-50)+"px";
			element.style.height 	= (height-50)+"px";
			element.style.top 		= "50px";
			element.style.left		= "0px";
			
		},
		
		remove: function() {
			
			document.body.removeChild(element);
			
			window.removeEventListener('resize', this._windowListener, false);
			
		}
		
	};
	
	//$(document.body).append(canvas);
	
	// var fitCanvasToScreen = _.debounce(function() {
	// 	var height = $(window).height(),
	// 		width  = $(window).width();
	// 
	// 	$(canvas).css({
	// 		top: 50,
	// 		left: 0,
	// 		height: height - 50,
	// 		width: width
	// 	});
	// 
	// }, 300);
	// 
	// $(window).bind("resize", fitCanvasToScreen);
	// fitCanvasToScreen();
	// 
	// return {
	// 	remove: function() {
	// 		$(window).unbind("resize", fitCanvasToScreen);
	// 		$(canvas).remove();
	// 	}
	// }	
}