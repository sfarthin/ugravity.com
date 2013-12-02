var LocationBar = require('location-bar'),
	router = new LocationBar,
	routes = require("./routes");

module.exports = function(window, document) {
	
	// Lets setup our router to handle all the routes defined in routes.js
	routes.forEach(function(route, i) {
		
		// This handles pushState stuff
		router.route(route.regex, function () {
			// only called when the current url matches the regex
			route.app.apply(this, [window, document, router, function(){} ]);
		});

		// API for nodejs
		routes[i].exec = function(onLoad) {
			router.update(route.path, {trigger: false});
			route.app.apply(this, [window, document, router, onLoad]);
		}				
		
	});
	
	return routes;
}

// If window is already defined, we must be in the browser. In this case, lets run this thing
if(typeof window != "undefined") {
	module.exports(window,document);
	router.start({pushState: true});
}