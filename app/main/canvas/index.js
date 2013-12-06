var debounce 	= require("debounce"),
	uGravity 	= require("ugravity"),
	element;

module.exports = function(window, document, router, navigation, settings) {
	
	return {
		add: function() {
			
			// Add window listener
			this._windowListener = debounce(this.fitCanvasToScreen.bind(this), 100);
			window.addEventListener('resize', this._windowListener, false);
			
			this.fitCanvasToScreen();
			
			// if(element.getContext && element.getContext('2d')) {
			// 	this.uGravity = new uGravity(element, settings);
			// 	this.uGravity.normalize();
			// }
			
			
			navigation.updateObjects.bind(navigation)(settings.objects);
			
			navigation.on("reset", function() {
				this.uGravity.load(settings);
			}.bind(this));
			
			navigation.on("stop", function() {
				console.log("stop");
				this.uGravity.stop();
			}.bind(this));
			
			navigation.on("start", function() {
				this.uGravity.start();
			}.bind(this));
			
			navigation.on("normalize", function() {
				this.normalize();
			}.bind(this));
			
			// 
			// var uGravity = this.uGravity;
			// setTimeout(function() {
			// 	
			// 	uGravity.stop();
			// 	
			// }, 300);
			
			
		},
		
		normalize: function() {
			this.uGravity.normalize();
		},
		
		fitCanvasToScreen: function() {
			var height = window.innerHeight,
				width  = window.innerWidth;
		
		
			if(element) {
				element.parentNode.removeChild(element);
				element = null;
			}
		
			element = document.createElement("canvas");
			element.id = "main-canvas";
			document.body.appendChild(element);
		
			// This makes our canvas retina ready
			element.width 	= width*2;
			element.height 	= height*2;
		
			element.style.width  	= width+"px";
			element.style.height 	= (height-50)+"px";
			element.style.height 	= (height-50)+"px";
			element.style.top 		= "50px";
			element.style.left		= "0px";
			
			// @todo, lets reinstaniate the whole uGravity thing here instead of just rendering.
			// if(this.uGravity) {
			// 	this.uGravity.render();
			// }
			// 
			if(element.getContext && element.getContext('2d')) {
				this.uGravity = new uGravity(element, settings);
				this.uGravity.normalize();
			}
			
		},
		
		export: function() {
			return this.uGravity.export();
		},
		
		update: function(new_settings) {
			settings = new_settings;
			this.uGravity.load(settings);
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