;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(window, document, router, onLoad) {
	
	document.body.innerHTML = "adsadasdas";
	onLoad();
	
}
},{}],2:[function(require,module,exports){
var html 	= "<!-- <div name=\"newModal\" class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"newModal\" aria-hidden=\"false\" style=\"display: block;\"> -->\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button> -->\n\t\t\t\t<h4 class=\"modal-title\">Object Properties</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"form-horizontal\" role=\"form\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"col-sm-5 control-label\">Presets</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<button class=\"btn remove btn-default\" data-preset=\"sun\">Sun</button>\n\t\t\t\t\t\t\t<button class=\"btn remove btn-default\" data-preset=\"jupiter\">Jupiter</button>\n\t\t\t\t\t\t\t<button class=\"btn remove btn-default\" data-preset=\"earth\">Earth</button>\n\t\t\t\t\t\t\t<button class=\"btn remove btn-default\" data-preset=\"moon\">Moon</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<!-- General -->\n\t\t\t\t\t<div class=\"page-header\"><h5>General</h5></div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"col-sm-5 control-label\">Name</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"col-sm-5 control-label\">Color</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<select class=\"form-control\" name=\"color\">\n\t\t\t\t\t\t\t\t<option value=\"#FF0000\">Red</option>\n\t\t\t\t\t\t\t\t<option value=\"#00FF00\">Green</option>\n\t\t\t\t\t\t\t\t<option value=\"#0000FF\">Blue</option>\n\t\t\t\t\t\t\t\t<option value=\"#FFFF00\">Yellow</option>\n\t\t\t\t\t\t\t\t<option value=\"#660099\">Purple</option>\n\t\t\t\t\t\t\t\t<option value=\"#CC3300\">Orange</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"earth_mass\" class=\"col-sm-5 control-label\">Mass (Earth masses)</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"earth_mass\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"radius_in_km\" class=\"col-sm-5 control-label\">Radius (km)</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"radius_in_km\" placeholder=\"(e.g., the Earth's radius is 6,371 km)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<!-- Position -->\n\t\t\t\t\t<div class=\"position_group\">\n\t\t\t\t\t\t<div class=\"page-header\"><h5>Position relative to another object</h5></div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"relative_object\" class=\"col-sm-5 control-label\">Object</label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"relative_object\">\n\t\t\t\t\t\t\t\t{objects}\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"relative_object_distance\" class=\"col-sm-5 control-label\">Distance (AU)</label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"relative_object_distance\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"relative_object_direction\" class=\"col-sm-5 control-label\">Direction (degrees)<span class=\"glyphicon glyphicon-circle-arrow-up direction\"></span></label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" min=\"0\" max=\"360\" step=\"5\" value=\"0\" name=\"relative_object_direction\">\n\t\t\t\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" name=\"direction\" placeholder=\"(i.e. 45)\"> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"page-header\"><h5>Velocity relative to another object</h5></div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"velocity_in_km\" class=\"col-sm-5 control-label\">Velocity (km/s)</label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"velocity_in_km\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"velocity_direction\" class=\"col-sm-5 control-label\">Velocity direction (degrees)<span class=\"glyphicon glyphicon-circle-arrow-up velocity_direction\"></span></label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" min=\"0\" max=\"360\" step=\"5\" value=\"0\" name=\"velocity_direction\">\n\t\t\t\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" name=\"velocity_direction\" placeholder=\"(i.e. 45)\"> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn remove btn-default\" data-dismiss=\"modal\">Remove Object</button>\n\t\t\t\t<button type=\"button\" class=\"btn save btn-primary\" data-dismiss=\"modal\">Save Object</button>\n\t\t\t</div>\n\t\t</div><!-- /.modal-content -->\n\t</div><!-- /.modal-dialog -->\n<!-- </div> -->".toString(),
	extend 	= require("../extend");

module.exports = function(window, document, router) {
	
	var div 		= document.createElement("div");
	var backdrop 	= document.createElement("div");
	
	var get_value = function(name) { return div.querySelector("[name="+name+"]").value; },
		set 	  = function(name, value) { try { return div.querySelector("[name="+name+"]").value = value; } catch(e) { console.log("cannot set " + name); }  };
	

	div.id = "editModal";
	div.className = "modal fade In";
	div.setAttribute("tabindex", -1);
	div.setAttribute("role", "dialog");
	div.setAttribute("aria-labelledby", "editModal");
	div.setAttribute("aria-hidden", "false");
	div.style.display = "block";


	backdrop.className = "modal-backdrop fade in";
	
	this.open = function(settings, editObject, callback) {
		
		div.innerHTML = html.replace(/{link}/g, window.location.protocol+"//"+window.location.host+"/project/"+encodeURI(JSON.stringify(settings)));
		
		// Build dropdown for the relative object list
		if(settings.objects) {
			var objects_html = [], j = 0;
			settings.objects.sort(function(a,b) {
				if(a.mass < b.mass) return 1; else return -1;
			}).forEach(function(object) {
				objects_html[j++] = "<option value='"+escape(object.id)+"'>"+object.name+"</option>";
			});
		}
		
		// If there are no objects or if the object has a position already without a relative object
		if((!editObject && (!settings.objects || !settings.objects.length)) || (editObject && !editObject.relative_object)) {
			div.querySelector(".position_group").style.display = "none";
		} else {
			div.innerHTML = html.replace(/{objects}/g, objects_html.join(""));
		}
		
		// If we are editing an object that already exists, lets set the form fields.
		if(editObject) {
			var fields = ["name", "color", "earth_mass", "radius_in_km", "relative_object", "relative_object_distance", "relative_object_direction", "velocity_in_km", "velocity_direction"];
			
			fields.forEach(function(field) {
				set(field, editObject[field]);
			});
			
		}
		
		
		// Lets listen for button clicks.
		this._modalContentListener = function(e) {
			
			// @todo cleannnnnn UP!!!!
			// The buttons at the bottom
			if(e.toElement.getAttribute("data-dismiss") == "modal") {
				
				if(e.toElement.className.match("save")) {
					
					try { _paq.push(['trackPageView', 'object/save']); } catch(e) {}

					var x, y,
						km_in_au = 1.496e+8,
						kg_in_earthm = 5.9721986e24,
						
						relative_object_id = get_value("relative_object"),
						distance  		  = Number(get_value("relative_object_distance")),
						direction_radians = Number(get_value("relative_object_direction")) * Math.PI / 180,
						relative_object   = (settings.objects ? settings.objects.filter(function(object) {
												return object.id == relative_object_id;
											})[0] : null);
					
					// Lets determine if position.						
					if(relative_object && (distance || distance == 0) && (direction_radians || direction_radians == 0)) {
						x = relative_object.x + (Math.sin(direction_radians)*distance);
						y = relative_object.y - (Math.cos(direction_radians)*distance);
					} else {
						//
						x = (editObject && editObject.x ? editObject.x : 0);
						y = (editObject && editObject.y ? editObject.y : 0);
					}
						
					var velocity_direction_radians = Number(get_value("velocity_direction")) * Math.PI / 180,
						velocity 				   = Number(get_value("velocity_in_km"))/km_in_au, // convert to AU
						relative_object_velocityX = 0, 
						relative_object_velocityY = 0;
						
					var updatedObject = {
						// Essiential
						id: 		(editObject && editObject.id ? editObject.id : new Date().getTime()+"-"+Math.round((Math.random()*100))),
						"name": 	get_value("name"),
						"color": 	get_value("color"),
						"mass": 	Number(get_value("earth_mass").replace(/,/g, ""))*kg_in_earthm, // Convert earth masses to kg
						"radius": 	Number(get_value("radius_in_km").replace(/,/g, ""))/km_in_au,
						"y": 		Number(y),
						"x": 		Number(x),
						"velocityX": (Math.sin(velocity_direction_radians)*velocity) + (relative_object ? relative_object.velocityX : 0), //+ relative_object_velocityX,
						"velocityY": (Math.cos(velocity_direction_radians)*velocity)*-1 + (relative_object ? relative_object.velocityY : 0), //+ relative_object_velocityY,
						
						// Additional for uGravity.com.. we can keep these as text so we can use equations.
						"earth_mass": 					get_value("earth_mass"),
						"radius_in_km":    				get_value("radius_in_km"),
						"relative_object": 				get_value("relative_object"),
						"relative_object_distance": 	get_value("relative_object_distance"),
						"relative_object_direction": 	get_value("relative_object_direction"),
						"velocity_in_km": 				get_value("velocity_in_km"),
						"velocity_direction": 			get_value("velocity_direction"),
					};
					
					callback(updatedObject);
				} else if(e.toElement.className.match("remove")) {
					
					try { _paq.push(['trackPageView', 'object/remove']); } catch(e) {}
					callback();
					
				}
				this.close();
			}
			
			
			if(e.toElement.getAttribute("data-preset")) {
				var preset = e.toElement.getAttribute("data-preset");
				
				if(preset == "earth") {
					
					try { _paq.push(['trackPageView', 'preset/earth']); } catch(e) {}
					
					set("name", "Earth");
					set("earth_mass", 1);
					set("radius_in_km", 6371);
					
					// Earth moves at 67000 miles/hr
					// 92955807.3 miles in one AU
					//set("velocity", 67000/ 92955807.3 / 60 / 60);
					
				} else if(preset == "sun") {
					
					set("name", "Sun");
					set("earth_mass", 333000);
					set("radius_in_km", 6.96342e5);
					
				} else if(preset == "moon") {
					
					set("name", "Moon");
					set("earth_mass", 0.0123);
					set("radius_in_km", 1737.5);
					
				} else if(preset == "jupiter") {
	
   					set("name", "Jupiter");
   					set("earth_mass", 317.94);
   					set("radius_in_km", 69174);
	
   				}
				
				this._velocityDirectionListener();
				this._directionListener();
				
			}
			
		}.bind(this);
		div.querySelector(".modal-content").addEventListener("click", this._modalContentListener, false);
		
		// Lets have arrows showing the direction.
		this._velocityDirectionListener = function() {
			var degrees = parseInt(get_value("velocity_direction")) % 360;
			div.querySelector(".velocity_direction.glyphicon").setAttribute("style", " " +  
				"-ms-transform:rotate("+degrees+"deg);" +
				"-moz-transform:rotate("+degrees+"deg);" +
				"-webkit-transform:rotate("+degrees+"deg);" +
				"-o-transform:rotate("+degrees+"deg);" +
				"transform:rotate("+degrees+"deg);");
			
		};
		div.querySelector("[name=velocity_direction]").addEventListener("keyup", this._velocityDirectionListener, false);
		div.querySelector("[name=velocity_direction]").addEventListener("change", this._velocityDirectionListener, false);
		this._velocityDirectionListener(); // Lets make sure its set initially.
		
		this._directionListener = function() {
			var degrees = parseInt(get_value("relative_object_direction")) % 360;
			div.querySelector(".direction.glyphicon").setAttribute("style", " " +  
				"-ms-transform:rotate("+degrees+"deg);" +
				"-moz-transform:rotate("+degrees+"deg);" +
				"-webkit-transform:rotate("+degrees+"deg);" +
				"-o-transform:rotate("+degrees+"deg);" +
				"transform:rotate("+degrees+"deg);");
			
		};
		div.querySelector("[name=relative_object_direction]").addEventListener("keyup", this._directionListener, false);
		div.querySelector("[name=relative_object_direction]").addEventListener("change", this._directionListener, false);
		this._directionListener(); // Lets make sure its set initially.
		
		document.body.appendChild(backdrop);
		document.body.appendChild(div);
		
	}
	
	this.close = function() {
		
		div.querySelector(".modal-content").removeEventListener("click", this._modalContentListener, false);			
		div.querySelector("[name=velocity_direction]").removeEventListener("keyup", this._velocityDirectionListener, false);
		div.querySelector("[name=velocity_direction]").removeEventListener("change", this._velocityDirectionListener, false);
		div.querySelector("[name=relative_object_direction]").removeEventListener("keyup", this._directionListener, false);
		div.querySelector("[name=relative_object_direction]").removeEventListener("change", this._directionListener, false);
		
		document.body.removeChild(backdrop);
		document.body.removeChild(div);
	}
	
	return this;
	
}
},{"../extend":4}],3:[function(require,module,exports){
var Emitter = {};

Emitter.on = function(msg, func, context) {
	
	if(!this._listeners) this._listeners = {}
	
	if(!this._listeners[msg])
		this._listeners[msg] = [];
		
	this._listeners[msg].push({func: func, context: context});
	
};

Emitter.trigger = function(msg) {
	
	if(!this._listeners) this._listeners = {}
	
	if(this._listeners[msg]) {
		for(var i in this._listeners[msg]) {
			var func 	= this._listeners[msg][i].func,
				context	= this._listeners[msg][i].context;
			
			func.apply((context ? context : this), [].slice.call(arguments, 1));
		}
	}	
};

module.exports = Emitter;
},{}],4:[function(require,module,exports){
module.exports = function(obj) {
  Array.prototype.slice.call(arguments, 1).forEach(function(source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
};
},{}],5:[function(require,module,exports){
// Libraries
var debounce 	= require("debounce"),
	uGravity 	= require("ugravity"); //require("../../../gravity/uGravity.js"); //

// interfaces
var Navigation	= require("./navigation/index"),
	SaveDialog  = require("./saveDialog/index"),
	EditDialog 	= require("./editDialog/index"),
	IntroDialog = require("./introDialog/index"),
	TimeDialog 	= require("./timeDialog/index");

var processingHTML = "<div class=\"modal-dialog\">\n\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\">\n\t\t\t<p>Processing Video...</p>\n\t\t</div>\n\t</div>\n</div>\n".toString();

// Package information
var package_json = JSON.parse("{\n  \"name\": \"uGravity.com\",\n  \"description\": \"Map out planetary bodies and create custom simulations with this interactive web app.\",\n  \"version\": \"0.0.1\",\n  \"homepage\": \"https://uGravity.com\",\n  \"author\": \"Steve Farthing <me@stevefar.com> (https://stevefar.com)\",\n  \"license\": \"GPL\",\n  \"dependencies\": {\n    \"jsdom\": \"~0.8.8\",\n    \"location-bar\": \"~1.0.0\",\n    \"brfs\": \"0.0.8\",\n    \"jquery\": \"~1.8.3\",\n    \"step\": \"0.0.5\",\n    \"underscore\": \"~1.5.2\",\n    \"express\": \"~3.4.4\",\n    \"micro-template\": \"~0.1.2\",\n    \"debounce\": \"0.0.3\",\n    \"ugravity\": \"0.0.8\",\n    \"browserify\": \"~2.36.1\",\n    \"hammerjs\": \"~1.0.6\"\n  },\n  \"devDependencies\": {\n    \"grunt\": \"~0.4.2\",\n    \"grunt-contrib-less\": \"~0.8.2\",\n    \"grunt-contrib-uglify\": \"~0.2.7\",\n    \"grunt-contrib-watch\": \"~0.5.3\",\n    \"bower\": \"~1.2.7\",\n    \"grunt-contrib-copy\": \"~0.4.1\"\n  }\n}\n".toString());

module.exports = function(window, document, router, onLoad) {
	
	// Lets make our instances.
	var navigation = new Navigation(window, document, router),
		saveDialog = new SaveDialog(window, document, router),
		introDialog = new IntroDialog(window, document, router),
		editDialog = new EditDialog(window, document, router),
		timeDialog = new TimeDialog(window, document, router);

	introDialog.open();


	/**
	*
	* Lets create the canvas with the simulation and make sure it always fits to the screen, even when resized.
	*
	**/
	// This variable contains the settings for the simulation without any simulation applied, so we can reset our simulation with these settings.
	this._settings = {objects: [], elapsedTime: 0};
	this.changeSettings = function(new_settings) {
		this._settings = new_settings;
		
		this._settings.elapsedTime = 0;
		
		// Lets update our navigation dropdown
		navigation.objectDropdown.update(this._settings.objects);
		
		// Lets let ugravity simulation know.
		this.uGravity.load(this._settings);
		
		// lets save it in local storage in case for a page reload.
		localStorage["ugravity-last-project"] = JSON.stringify(this._settings);
		
		this.uGravity.normalize();
	}
	
	
	/**
	*
	* Lets create the canvas with the simulation and make sure it always fits to the screen, even when resized.
	*
	**/
	this.createCanvasToFitScreen = function() {
		var height = window.innerHeight,
			width  = window.innerWidth;

		// If our canvas exists, lets kill it.
		if(this.canvas) {
			this.canvas.parentNode.removeChild(this.canvas);
			this.canvas = null;
		}
		
		// Create our canvas and add it to the screen
		this.canvas = document.createElement("canvas");
		this.canvas.id = "main-canvas";
		document.body.appendChild(this.canvas);
	
		// This makes our canvas retina ready
		this.canvas.width 	= width*2;
		this.canvas.height 	= height*2;
		
		// Lets make it fit the screen but not cover the top menu
		this.canvas.style.width  	= width+"px";
		this.canvas.style.height 	= (height-50)+"px";
		this.canvas.style.height 	= (height-50)+"px";
		this.canvas.style.top 		= "50px";
		this.canvas.style.left		= "0px";
		
		// apply uGravity simulator to the canvas.
		if(this.canvas.getContext && this.canvas.getContext('2d')) {
			this.uGravity = new uGravity(this.canvas, this._settings);
		}		
	};
	
	
	this.reset 		= function() { this.uGravity.load(this._settings); }
	this.stop 		= function() { this.uGravity.stop(); }
	this.start 		= function() { 
		if(!this.uGravity.isRunning()) {
			this.uGravity.start(); 	
		}
	}
	this.capture 	= function() {
		
		var confirm_t = confirm("This feature is very experimental and may take up to a minute to produce 5 seconds video. As of 2/1/14, Google Chrome is the only browser that supports this feature. After the capture is complete you can right-click (or CTRL click) and \"Save Video As...\" to save it to your computer in the WebM format. \n\n Are you sure you want to proceed?");
		// 
		// time = Number(time);
		// 
		// if(time > 10) time = time;
		
		if(confirm_t) {
			
			// Lets add HTML
			var pDiv = document.createElement("div");
			pDiv.innerHTML = processingHTML;
			pDiv.style.display = "block";
			pDiv.className = "modal fade In";
			
			var background = document.createElement("div");
			background.className = "modal-backdrop fade in";
			
			document.body.appendChild(pDiv);
			document.body.appendChild(background);
			
			// Lets capture video
			this.encoder = new Whammy.Video(15); 
		
			var original_fps = this.uGravity.fps;
			this.uGravity.fps = 5;
		
			// Setup a hook to capture information rather than print to screen.
			this.uGravity.onRender = function(canvas) {
				this.encoder.add(canvas); 
			}.bind(this);
		
			// Lets start our simulation
			this.uGravity.start();
		
			// Lets stop it in so many seconds
			setTimeout(function() {
			
				this.uGravity.stop();
			
				this.reset();
			
				this.uGravity.fps = original_fps;
		
				var output 	= this.encoder.compile(),
					url 	= (window.webkitURL || window.URL).createObjectURL(output); 
		
				window.open(url);
			
				this.uGravity.onRender = null;
				
				// removign processing message.
				document.body.removeChild(pDiv);
				document.body.removeChild(background);
				
				this.uGravity.render();
			
			}.bind(this), 10000);
		
		}
		// 	
		// } else {
		// 	alert("Invalid number of seconds given, please enter a number between 1 and 10.");
		// }

	}.bind(this);
	
	this.normalize 	= function() { this.uGravity.normalize(); }

	this.changeSpeed = function() {
		timeDialog.open(this.uGravity.export().timeScale, function(timeScale) {
			// Lets append our settings.
			this._settings.timeScale = timeScale;
			localStorage["ugravity-last-project"] = JSON.stringify(this._settings);
			
			navigation.updateTimeScale(timeScale);
			this.uGravity.load({timeScale: timeScale});

		}.bind(this));
	}
	
	this.saveProject 	= function() { saveDialog.open(this._settings); }
	this.newProject 	= function() { this.changeSettings({objects: [], elapsedTime: 0}); }

	this.newObject = function() {
		editDialog.open(this._settings, null, function(object) {
			if(!this._settings.objects) this._settings.objects = [];
			if(object) this._settings.objects.push(object);
			this.changeSettings(this._settings);
		}.bind(this));
	}
	
	this.editObject = function(objectid) {
		// Lets find the object
		var editObject = this._settings.objects.filter(function(o) { return o.id == objectid; })[0];

		// Lets open the dialog
		editDialog.open(this._settings, editObject, function(object) {
			
			// lets remove it from the settings...
			this._settings.objects = this._settings.objects.filter(function(object) { return editObject != object; });
			
			// add it fresh.
			if(object) this._settings.objects.push(object);

			this.changeSettings(this._settings);			
		}.bind(this));
	}
	
	
	
	/**
	*
	* Our main init method
	*
	**/
	this.init = function() {
		
	
		/**
		*
		* Lets set a title and keyword description.
		*
		**/
		var title = document.createElement("title");
		title.innerHTML = "uGravity | Universal Gravity Simulator";
		document.head.appendChild(title);
	
		var meta_description = document.createElement("meta");
		meta_description.setAttribute("name", "description");
		meta_description.setAttribute("content", package_json.description);
		document.head.appendChild(meta_description);
		
		/**
		*
		* Lets create the canvas with the simulation and make sure it always fits to the screen, even when resized.
		*
		**/
		this._windowListener = debounce(this.createCanvasToFitScreen.bind(this), 100);
		window.addEventListener('resize', this._windowListener, false);
		this.createCanvasToFitScreen();
		
		
		/**
		*
		* Lets see if some settings were passed in or exist from a previous project
		*
		**/
		if(window.location.href.match("project/")) {
			
			// Lets decode the settings from the URL
			try { this.changeSettings(JSON.parse(decodeURI(window.location.href.match(/project\/(.+)$/)[1]))); } catch(e) {}
			router.update("/", {replace: true});
				
		} else {
			if(window.localStorage && localStorage["ugravity-last-project"]) {
				// Lets grab these settings from local storage.
				try { this.changeSettings(JSON.parse(localStorage["ugravity-last-project"])); } catch(e) {}
			}
		}
		
		// Lets make sure we show the correct time Scale at the top of the screen.
		if(this.uGravity) {
			navigation.updateTimeScale(this.uGravity.export().timeScale);
		}
		
		/**
		*
		* Lets handle interactions with our navigation
		*
		**/
		navigation.on("reset", 		this.reset.bind(this));
		navigation.on("stop", 		this.stop.bind(this));
		navigation.on("start", 		this.start.bind(this));
		navigation.on("capture", 	this.capture.bind(this));
		navigation.on("normalize", 	this.normalize.bind(this));
		navigation.on("time", 		this.changeSpeed.bind(this));
		navigation.on("save", 		this.saveProject.bind(this));
		navigation.on("new", 		this.newProject.bind(this));
		navigation.on("newobject", 	this.newObject.bind(this));
		navigation.on("editobject", this.editObject.bind(this));
		
		navigation.on("sun-earth-moon", function() {
			this.changeSettings({"objects":[{"id":"1386822433769-92","name":"Sun","color":"#FF0000","mass":1.9887421338e+30,"radius":0.004654692513368984,"y":1.8614179595657845e-22,"x":-0.0000030400266236668134,"velocityX":0,"velocityY":0,"earth_mass":"333000","radius_in_km":"696342","relative_object":"","relative_object_distance":"","relative_object_direction":"0","velocity_in_km":"","velocity_direction":"0","scaledX":1294.9962856454129,"scaledY":520,"scaledRadius":5.687179959060245},{"id":"1386822450577-96","name":"Earth","color":"#0000FF","mass":5.9721986e+24,"radius":0.000042586898395721926,"y":-6.123013154932292e-17,"x":0.9999969599733763,"velocityX":2.4393896620258584e-23,"velocityY":1.9919786096256684e-7,"earth_mass":"1","radius_in_km":"6371","relative_object":"1386822433769-92","relative_object_distance":"1","relative_object_direction":"90","velocity_in_km":"29.8","velocity_direction":"180","scaledX":2516.8127520877824,"scaledY":519.9999999999999,"scaledRadius":0.05203337371460119},{"id":"1386823517240-54","name":"Moon","color":"#FFFF00","mass":7.345804278e+22,"radius":0.000011614304812834225,"y":-6.138914668436675e-17,"x":1.0025939599733764,"velocityX":2.4393896620258584e-23,"velocityY":1.9237967914438503e-7,"earth_mass":"0.0123","radius_in_km":"1737.5","relative_object":"1386822450577-96","relative_object_distance":"0.002597","relative_object_direction":"90","velocity_in_km":"1.02","velocity_direction":"0","scaledX":2519.9858094511337,"scaledY":519.9999999999999,"scaledRadius":0.014190548866601722}],"elapsedTime":0,"timeScale":86400});
			navigation.updateTimeScale(this.uGravity.export().timeScale);
		}.bind(this));
		
		navigation.on("sun-jupiter", function() {
			this.changeSettings({"objects":[{"id":"1386830027195-84","name":"Sun","color":"#FF0000","mass":1.9887421338e+30,"radius":0.008665387700534759,"y":0.004960093057097376,"x":0,"velocityX":0,"velocityY":0,"earth_mass":"333000","radius_in_km":"1296342","relative_object":"","relative_object_distance":"","relative_object_direction":"0","velocity_in_km":"","velocity_direction":"0","scaledX":1295,"scaledY":851.7209036332954,"scaledRadius":120.05687519541664},{"id":"1386830071079-99","name":"Jupiter","color":"#0000FF","mass":1.898800822884e+27,"radius":0.00046239304812834226,"y":-5.1950399069429025,"x":0,"velocityX":8.731347754916602e-8,"velocityY":-5.34623196905181e-24,"earth_mass":"317.94","radius_in_km":"69174","relative_object":"1386830027195-84","relative_object_distance":"5.2","relative_object_direction":"0","velocity_in_km":"13.062096241355237","velocity_direction":"90","scaledX":1295,"scaledY":-71193.03607563493,"scaledRadius":6.406345150251825}],"elapsedTime":0,"timeScale":103680000});
			navigation.updateTimeScale(this.uGravity.export().timeScale);
		}.bind(this));
		
	}
	
	this.init();
	
	onLoad();
};
},{"./editDialog/index":2,"./introDialog/index":6,"./navigation/index":7,"./saveDialog/index":9,"./timeDialog/index":10,"debounce":13,"ugravity":15}],6:[function(require,module,exports){
var html 				= "<!-- <div id=\"introModal\" class=\"modal fade In\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"introModal\" aria-hidden=\"false\"> -->\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button> -->\n\t\t\t\t<h4 class=\"modal-title\">What is uGravity?</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<p>Isaac Newton's discovery that <strong>all</strong> objects attract each other with the force of gravitational attraction is amazing. Gravity is universal. The force caused by an apple falling from a tree and the motion of celestial bodies can be found using the same laws. uGravity allows one to map out a 2D system of celestical bodies. When one clicks \"Start,\" the motion of these celestial bodies are simulated using these laws of Universal Gravity.</p>\n\t\t\t\t\n\t\t\t\t<h4 style=\"margin-top:30px;\">Getting Started</h4>\n\t\t\t\t\n\t\t\t\t<hr />\n\t\t\t\t\n\t\t\t\t<p> <img src=\"/img/step1.png\" width=\"250\" style=\"float:right;margin-left:20px;border:1px solid grey;box-shadow: 5px 5px 5px #888;\">1. First add objects to the screen. You can load some objects right away by selecting an example under \"Project\" (such as <em>Sun and Jupiter</em>).</p>\n\t\t\t\t<p style=\"clear:both;padding-top:30px;\"><img src=\"/img/step2.png\" width=\"250\" style=\"margin-left:20px;float:right;border:1px solid grey;box-shadow: 5px 5px 5px #888;\">2. Give objects a mass, size, position, and distance from one another.</p>\n\t\t\t\t<p style=\"clear:both;padding-top:30px;\"><img src=\"/img/step3.png\" width=\"250\" style=\"margin-left:20px;float:right;border:1px solid grey;box-shadow: 5px 5px 5px #888;\">3. Click Start and watch universal gravity go! You can zoom by scrolling or pinching (on touch devices) and pan by dragging. </p>\n\t\t\t\t\n\t\t\t\t<h4 style=\"margin-top:30px;clear:both;padding-top:20px;\">Support</h4>\n\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\n\t\t\t\tThis app works best on Google Chrome on a desktop computer. There is support for touch devices (iPhones, iPads, Andriod tablets), but this app requires a significent amount of processing power and the simulation may not run as smooth.\n\t\t\t\t\n\t\t\t\t<h4 style=\"margin-top:30px;\">Additional Notes</h4>\n\t\t\t\t\t\t\t\t<hr />\n\t\t\t\t\n\t\t\t\t<p style=\"\"></p>\n\t\t\t\t<p>There are some limitations. The accuracy of the simulation will depend on the power of your device, the speed of the simulation, and the number of objects. Please read about the <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/N-body_problem\">n-body problem</a> for more information.</p>\n\t\t\t\t<p>Please <a target=\"_blank\" href=\"mailto:me@stevefar.com\">email me</a> if you have any questions or comments.</p>\n\t\t\t\t<p>You may also <a target=\"_blank\" href=\"https://github.com/sfarthin/ugravity.com\">view or download</a> the code. For more information about myself, please visit <a href=\"http://www.stevefar.com\" target=\"_blank\">my website</a>.</p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn save btn-primary\" data-dismiss=\"modal\">OK</button>\n\t\t\t</div>\n\t\t</div><!-- /.modal-content -->\n\t</div><!-- /.modal-dialog -->\n<!-- </div> -->".toString(),
	not_supported_html 	= "<!-- <div id=\"introModal\" class=\"modal fade In\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"introModal\" aria-hidden=\"false\"> -->\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button> -->\n\t\t\t\t<h4 class=\"modal-title\">Unsupported Device or Browser</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<p><strong>We are sorry but your device/web browser does not support the advanced features of uGravity.</strong></p>\n\t\t\t\t\n\t\t\t\t<p>uGravity works with the latest version of Google Chrome, Mozilla Firefox, Safari, and Internet Explorer. If you are able to update your web browser please do so. uGravity works best with Google Chrome on a desktop computer.</p>\n\t\t\t\t\n\t\t\t\t<p>There is also partial support of iPads running iOS 7.</p>\n\t\t\t</div>\n\t\t</div><!-- /.modal-content -->\n\t</div><!-- /.modal-dialog -->\n<!-- </div> -->".toString();

module.exports = function(window,document, router) {
	
	var div = document.createElement("div");
	var backdrop = document.createElement("div");

	div.id = "introModal";
	div.className = "modal fade In";
	div.setAttribute("tabindex", -1);
	div.setAttribute("role", "dialog");
	div.setAttribute("aria-labelledby", "introModal");
	div.setAttribute("aria-hidden", "false");
	div.style.display = "block";
	

	backdrop.className = "modal-backdrop fade in";

	this.open = function(settings) {
		
		
		if(document.querySelector("#introModal")) {
			document.querySelector("#introModal").parentNode.removeChild(document.querySelector("#introModal"));
			document.querySelector(".modal-backdrop").parentNode.removeChild(document.querySelector(".modal-backdrop"));
		}
		
		if(!window.jsdom && (!window.Blob || !document.createElement('canvas').getContext) || (window.navigator.userAgent.match(/safari/gi) && window.navigator.userAgent.match(/version\/5/gi))) {
			div.innerHTML = not_supported_html;
		} else {
			div.innerHTML = html;	
		}

		
		this._modalContentListener = function(e) {
			if(e.toElement.getAttribute("data-dismiss")) {
				this.close();
			} else {
				e.stopPropagation();
				//e.preventDefault();	
			}
		}.bind(this);
		div.querySelector(".modal-content").addEventListener("click", this._modalContentListener, false);

		
		this._closeListener = function() { this.close(); }.bind(this);			
		div.addEventListener("click", this._closeListener, false);
		
		document.body.appendChild(backdrop);
		document.body.appendChild(div);
		
	}
		
	this.close =function() {
		router.update("", {replace: true});
		
		div.querySelector(".modal-content").removeEventListener("click", this._modalContentListener, false);
		div.removeEventListener("click", this._closeListener, false);
		div.querySelector("button").removeEventListener("click", this._modalContentListener, false);
		
		document.body.removeChild(backdrop);
		document.body.removeChild(div);
	}
	
	return this;
	
}
},{}],7:[function(require,module,exports){
var html = "<!-- <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\"> -->\n\t<div class=\"container-fluid\">\n\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t<li class=\"capture\"><a><span class=\"glyphicon glyphicon-facetime-video\"></span> Capture Video</a></li>\n\t\t\t<li class=\"time\"><a><span class=\"glyphicon glyphicon-time\"></span> Set Time Scale (<span class=\"timeScale\">1</span> days/s)</a></li>\n\t\t\t<li class=\"normalize\"><a><span class=\"glyphicon glyphicon-resize-full\"></span> Fit to View</a></li>\n\t\t\t<li class=\"reset\"><a><span class=\"glyphicon glyphicon-refresh\"></span> Reset</a></li>\n\t\t\t<li class=\"start\"><a><span class=\"glyphicon glyphicon-play\"></span> Start</a></li>\n\t\t\t<li class=\"stop\" style=\"display:none\"><a><span class=\"glyphicon glyphicon-pause\"></span> Pause</a></li>\n\t\t</ul>\n\t\t\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand active\">uGravity</a>\n\t\t</div>\n\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Project <b class=\"caret\"></b></a>\n\t\t\t\t\t<ul class=\"dropdown-menu project\">\n\t\t\t\t\t\t<li class=\"new\"><a><span class=\"glyphicon glyphicon-flash\"></span> New Project</a></li>\n\t\t\t\t\t\t<li class=\"save\"><a><span class=\"glyphicon glyphicon-floppy-save\"></span> Save Project</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li class=\"sun-jupiter\"><a>Sun and Jupiter Example</a></li>\n\t\t\t\t\t\t<li class=\"sun-earth-moon\"><a>Sun, Earth and Moon Example</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"dropdown objects\">\n\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Objects <b class=\"caret\"></b></a>\n\t\t\t\t\t<!-- <ul class=\"dropdown-menu objects\"></ul> -->\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n<!-- </div> -->".toString(),
	extend = require("../extend"),
	ObjectDropdown = require("./objectDropdown/index"),
	div;

module.exports = function(window, document) {
	
	extend(this, require("../eventEmitter.js"));

	this.navButtons = ["normalize", "time", "start", "stop", "capture", "reset", "save", "new", "sun-earth-moon", "sun-jupiter"];
	
	this.navClick = function(i) {

		// Lets toggle Start/Pause button
		if(i == "stop") {
			div.querySelector(".nav li.start").style.display = "block";
			div.querySelector(".nav li.stop").style.display = "none";
			div.querySelector(".nav li.capture").style.display = "block";
		} else if(i == "start") {
			div.querySelector(".nav li.start").style.display = "none";
			div.querySelector(".nav li.stop").style.display = "block";
			div.querySelector(".nav li.capture").style.display = "none";
		}

		// Lets track these things
		if(i == "new" || i == "save") {
			try { _paq.push(['trackPageView', 'project/'+i]); } catch(e) {}							
		} else {
			try { _paq.push(['trackPageView', 'nav/'+i]); } catch(e) {}	
		}
		
		// Lets trigger all clicks so other interfaces can listen.
		this.trigger(i);
	};
	
	this.init = function() {
		
		/**
		*
		* Lets add this thing to the dom if its not alreayd there
		*
		**/
		if(!div) {

			div_in_dom = document.getElementById("main-nav");

			if(div_in_dom) {
				div = div_in_dom;
			} else {
				div = document.createElement("div");
			}
	
			div.innerHTML = html;
			div.id = "main-nav";
			div.className = 'navbar navbar-inverse navbar-fixed-top';
			div.setAttribute("role", "navigation");	
			
			if(!div_in_dom)
				document.body.appendChild(div);
		}
		
		/**
		*
		* Lets open dropdowns on mouseover
		*
		**/
		this._dropdownMouseover = function(e) { e.currentTarget.className = e.currentTarget.className + " open"; };
		this._dropdownMouseout = function(e) { e.currentTarget.className = e.currentTarget.className.replace(/ open/g,""); };
		[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(d) { d.addEventListener('mouseover', this._dropdownMouseover, false); }.bind(this));
		[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(d) { d.addEventListener('mouseout', this._dropdownMouseout, false); }.bind(this));
		
		/**
		*
		* Lets listen for clicks of the nav
		*
		**/
		this._navListeners = {};
		this.navButtons.forEach(function(i) {
			
			this._navListeners[i] = function(e) {
				this.navClick(i);
				e.stopPropagation();
			}.bind(this);
			
			div.querySelector(".nav li."+i).addEventListener('click', this._navListeners[i], false);
			
		}.bind(this));
		
		/**
		*
		* Lets set up our object dropdown
		*
		**/
		this.objectDropdown = new ObjectDropdown(document, div.querySelector(".dropdown.objects"));
		
		// @todo we need soem sort of proxy msg
		this.objectDropdown.on("newobject", function() {
			
			// close all dropdowns
			[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(t) {
				t.className = t.className.replace(/ open/g,"");;
			});
			
			var arr = [].splice.call(arguments,0);
			arr.unshift("newobject");
			this.trigger.apply(this, arr);
		}.bind(this));
		
		this.objectDropdown.on("editobject", function() {
			
			// close all dropdowns
			[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(t) {
				t.className = t.className.replace(/ open/g,"");;
			});
			
			var arr = [].splice.call(arguments,0);
			arr.unshift("editobject");
			this.trigger.apply(this, arr);
		}.bind(this));
		
	};
	
	this.updateTimeScale = function(timeScale) {
		var seconds_in_a_day = 86400;
		div.querySelector("span.timeScale").innerHTML = Math.round(timeScale / seconds_in_a_day * 100) / 100;
	};
	
	this.remove = function() {
		[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(d) {d.removeEventListener('mouseover', this._dropdownMouseover, false); }.bind(this));
		[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(d) {d.removeEventListener('mouseout', this._dropdownMouseout, false); }.bind(this));

		this.navButtons.forEach(function(i) {
			div.querySelector(".nav li."+i).removeEventListener('click', this._navListeners[i], false);
		}.bind(this));
		
		document.body.removeChild(div);
		div = null;
	}
	
	this.init();
	
	return this;
}
},{"../eventEmitter.js":3,"../extend":4,"./objectDropdown/index":8}],8:[function(require,module,exports){
var extend = require("../../extend");

module.exports = function(document, element) {

	extend(this, require("../../eventEmitter.js"));

	var dropdown_ul = document.createElement("ul");
	dropdown_ul.className = "dropdown-menu objects";
	element.appendChild(dropdown_ul);
	
	this.update = function(objects) {
		var html = [], j = 0;

		if(objects && objects.length > 0) {

			for(var i in objects) {
				html[j++] = "<li class='object' data-objectid='"+objects[i].id+"'><a><span style='background-color:"+objects[i].color+";'></span>" + objects[i].name.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + "</a></li>"
			}

			html[j++] = '<li class="divider"></li><li class="add"><a>Add Another Object</a></li>';
			
		} else {
			
			html[j++] = '<li class="add"><a>Add Object</a></li>';
		}

		// Lets remove any existing listeners.
		try { dropdown_ul.querySelector("li.add").removeEventListener("click", this._addListener, false); } catch(e) {}
		try { [].splice.call(dropdown_ul.querySelectorAll("li.object"),0).forEach(function(d) { d.removeEventListener("click", this._editListener, false); }); } catch(e) {}

		dropdown_ul.innerHTML = html.join("");
		
		this._addListener = function() { 
			try { _paq.push(['trackPageView', 'object/new']); } catch(e) {}
			this.trigger("newobject") 
		}.bind(this);
		
		dropdown_ul.querySelector("li.add").addEventListener("click", this._addListener, false);
		
		this._editListener = function(e) { 
			try { _paq.push(['trackPageView', 'object/edit']); } catch(e) {}
			this.trigger("editobject", e.currentTarget.getAttribute("data-objectid")); 
		}.bind(this);
		[].splice.call(dropdown_ul.querySelectorAll("li.object"),0).forEach(function(d) { d.addEventListener("click", this._editListener, false); }.bind(this));
		
	}
	
	return this;
}
},{"../../eventEmitter.js":3,"../../extend":4}],9:[function(require,module,exports){
var html = "<!-- <div id=\"saveModal\" class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"saveModal\" aria-hidden=\"false\" style=\"display: block;\"> -->\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button> -->\n\t\t\t\t<h4 class=\"modal-title\">Save Project</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<p>Link to, save or share your current project using the unique permalink below. In addition, you can save this project to your web favorites by pressing CTRL-D (COMMAND-D on a Mac) now.</p>\n\n\t\t\t\t<p><a href=\"{link}\" target=\"_blank\" style=\"word-wrap: break-word;\">{link}</a></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Return to Project</button>\n\t\t\t</div>\n\t\t</div><!-- /.modal-content -->\n\t</div><!-- /.modal-dialog -->\n<!-- </div> -->".toString();

module.exports = function(window,document, router) {
	
	var div = document.createElement("div");
	var backdrop = document.createElement("div");

	div.id = "saveModal";
	div.className = "modal fade In";
	div.setAttribute("tabindex", -1);
	div.setAttribute("role", "dialog");
	div.setAttribute("aria-labelledby", "saveModal");
	div.setAttribute("aria-hidden", "false");
	div.style.display = "block";
	

	backdrop.className = "modal-backdrop fade in";

	this.open = function(settings) {
		
		div.innerHTML = html.replace(/{link}/g, window.location.protocol+"//"+window.location.host+"/project/"+encodeURI(JSON.stringify(settings)));
		
		this._modalContentListener = function(e) {
			if(e.toElement.getAttribute("data-dismiss")) {
				this.close();
			} else {
				e.stopPropagation();
				//e.preventDefault();	
			}
		}.bind(this);
		div.querySelector(".modal-content").addEventListener("click", this._modalContentListener, false);

		
		this._closeListener = function() { this.close(); }.bind(this);			
		div.addEventListener("click", this._closeListener, false);
		
		document.body.appendChild(backdrop);
		document.body.appendChild(div);
		
		router.update("/project/"+encodeURI(JSON.stringify(settings)), {replace: true});
		
	}
		
	this.close =function() {
		router.update("", {replace: true});
		
		div.querySelector(".modal-content").removeEventListener("click", this._modalContentListener, false);
		div.removeEventListener("click", this._closeListener, false);
		div.querySelector("button").removeEventListener("click", this._modalContentListener, false);
		
		document.body.removeChild(backdrop);
		document.body.removeChild(div);
	}
	
	return this;
	
}
},{}],10:[function(require,module,exports){
var html = "<!-- <div id=\"saveModal\" class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"saveModal\" aria-hidden=\"false\" style=\"display: block;\"> -->\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h4 class=\"modal-title\">Time Scale</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<p><input type=\"number\" name=\"time\" min=\"1\" step=\"1\" style=\"width:80px;\" autofocus> <strong>days / second</strong></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-primary\" data-dismiss=\"modal\">OK</button>\n\t\t\t</div>\n\t\t</div><!-- /.modal-content -->\n\t</div><!-- /.modal-dialog -->\n<!-- </div> -->".toString();

module.exports = function(window,document, router) {
	
	var div = document.createElement("div");
	var backdrop = document.createElement("div");

	div.id = "timeModal";
	div.className = "modal fade In";
	div.setAttribute("tabindex", -1);
	div.setAttribute("role", "dialog");
	div.setAttribute("aria-labelledby", "saveModal");
	div.setAttribute("aria-hidden", "false");
	div.style.display = "block";

	backdrop.className = "modal-backdrop fade in";
	
	div.innerHTML = html;
	
	
	var seconds_in_a_day = 86400;
	
	this.open = function(timeScale, callback) {

		div.querySelector("input").value = timeScale/seconds_in_a_day;

		this._modalContentListener = function(e) {
			
			callback(Number(div.querySelector("input").value)*seconds_in_a_day);
			this.close();
		}.bind(this);
		div.querySelector("button").addEventListener("click", this._modalContentListener, false);
		
		document.body.appendChild(backdrop);
		document.body.appendChild(div);

	}
		
	this.close = function() {
		div.querySelector("button").removeEventListener("click", this._modalContentListener, false);
		document.body.removeChild(backdrop);
		document.body.removeChild(div);
	}
	
	return this;
	
}
},{}],11:[function(require,module,exports){
var LocationBar = require('location-bar'),
	router = new LocationBar,
	routes = require("./routes");

module.exports = function(window, document) {
	
	// Lets setup our router to handle all the routes defined in routes.js
	routes.forEach(function(route, i) {
		
		// This handles pushState stuff
		router.route(route.regex, function () {
			// only called when the current url matches the regex
			//route.app.apply(this, [window, document, router, function(){} ]);
			new route.app(window, document, router, function() {});
		});

		// API for nodejs
		routes[i].exec = function(onLoad) {
			router.update(route.path, {trigger: false});
			//route.app.apply(this, [window, document, router, onLoad]);
			new route.app(window, document, router, onLoad);
		}				
		
	});
	
	return routes;
}

// If window is already defined, we must be in the browser. In this case, lets run this thing
if(typeof window != "undefined") {
	module.exports(window,document);
	router.start({pushState: true});
}
},{"./routes":12,"location-bar":14}],12:[function(require,module,exports){
module.exports = [
	{
		path: "",
		regex: /^$/,
		files: ["index.html"],
		app: require("./main/index.js")
	},
	{
		path: "",
		regex: /^project\/(.+)$/,
		files: ["index.html"], // maybe eventually load.html
		app: require("./main/index.js")
	},
	{
		path: "/about",
		regex: /^about$/,
		files: ["about.html"],
		app: require("./about.js")
	}
];
},{"./about.js":1,"./main/index.js":5}],13:[function(require,module,exports){
/**
 * Debounces a function by the given threshold.
 *
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, threshold, execAsap){
  var timeout;

  return function debounced(){
    var obj = this, args = arguments;

    function delayed () {
      if (!execAsap) {
        func.apply(obj, args);
      }
      timeout = null;
    }

    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      func.apply(obj, args);
    }

    timeout = setTimeout(delayed, threshold || 100);
  };
};

},{}],14:[function(require,module,exports){
// LocationBar module extracted from Backbone.js 1.0.0
// (actually it's commit f6fa0cb87e26bb3d1b7f47144fd720d1ab48e88f)
//
// the dependency on backbone, underscore and jquery have been removed to turn
// this into a small standalone library for handling browser's history API
// cross browser and with a fallback to hashchange events or polling.

(function(define) {
define(function() {

  // 3 helper functions we use to avoid pulling in entire _ and $
  function extend(obj, source) {
    for (var prop in source) {
      obj[prop] = source[prop];
    }
    return obj;
  }
  function on(obj, type, fn) {
    if (obj.attachEvent) {
      obj['e'+type+fn] = fn;
      obj[type+fn] = function(){ obj['e'+type+fn]( window.event ); };
      obj.attachEvent( 'on'+type, obj[type+fn] );
    } else {
      obj.addEventListener( type, fn, false );
    }
  }
  function off(obj, type, fn) {
    if (obj.detachEvent) {
      obj.detachEvent('on'+type, obj[type+fn]);
      obj[type+fn] = null;
    } else {
      obj.removeEventListener(type, fn, false);
    }
  }





  // this is mostly original code with minor modifications, mostyle to avoid
  // dependency on 3rd party libraries + renaming Backbone.History -> LocationBar
  //
  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var LocationBar = function() {
    this.handlers = [];

    // MODIFICATION OF ORIGINAL BACKBONE.HISTORY
    //
    // _.bindAll(this, 'checkUrl');
    //
    var self = this;
    var checkUrl = this.checkUrl;
    this.checkUrl = function () {
      checkUrl.apply(self, arguments);
    };

    // Ensure that `LocationBar` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash and query.
  var pathStripper = /[?#].*$/;

  // Has the history handling already been started?
  LocationBar.started = false;

  // Set up all inheritable **LocationBar** properties and methods.
  extend(LocationBar.prototype, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (LocationBar.started) throw new Error("LocationBar has already been started");
      LocationBar.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = extend({root: '/'}, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        // MODIFICATION OF ORIGINAL BACKBONE.HISTORY
        //
        // this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        //
        this.iframe = document.createElement("iframe");
        this.iframe.setAttribute("src", "javascript:0");
        this.iframe.setAttribute("tabindex", -1);
        this.iframe.style.display = "none";
        document.body.appendChild(this.iframe);
        this.iframe = this.iframe.contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        on(window, 'popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        on(window, 'hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !atRoot) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + this.location.search + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && atRoot && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      off(window, 'popstate', this.checkUrl);
      off(window, 'hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      LocationBar.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function() {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // MODIFICATION OF ORIGINAL BACKBONE.HISTORY
      //
      // return _.any(this.handlers, function(handler) {
      //   if (handler.route.test(fragment)) {
      //     handler.callback(fragment);
      //     return true;
      //   }
      // });
      //
      fragment = this.fragment = this.getFragment(fragment);
      for (var i = 0, l = this.handlers.length; i < l; i++) {
        var handler = this.handlers[i];
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      }
      return false;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!LocationBar.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the fragment of the query and hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });



  // add some features to LocationBar

  // a more intuitive alias for navigate
  LocationBar.prototype.update = function () {
    this.navigate.apply(this, arguments);
  };

  // a generic callback for any changes
  LocationBar.prototype.onChange = function (callback) {
    this.route(/^(.*?)$/, callback);
  };

  // checks if the browser has pushstate support
  LocationBar.prototype.hasPushState = function () {
    if (!LocationBar.started) {
      throw new Error("only available after locationBar.start()");
    }
    return this._hasPushState;
  };






  // export
  return LocationBar;
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });
},{}],15:[function(require,module,exports){


!function (name, definition) {
	// based on https://github.com/ded/domready for best support
	if (typeof module != 'undefined') module.exports = definition()
	else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	else this[name] = definition()
}('uGravity', function(uGravity) {
	
	// Variable to catch data from jsonp datafiles until the onload method triggers. We then
	// assign these options to the appropriate canvas.
	var jsonp_opts;
	
	
    // Helper method, Fill in a given object with default properties.
     var extend = function(obj) {
       Array.prototype.slice.call(arguments, 1).forEach(function(source) {
         if (source) {
           for (var prop in source) {
             obj[prop] = source[prop];
           }
         }
       });
       return obj;
     };
	
	/**
	*
	* Entry Point, managing all the parts neccessary to run the simulation.
	*
	*/
	function uGravity(canvas, opts) {
	
		// If canvas is not given lets assume its a data file (jsonp file)
		if(!opts && typeof canvas == "object") {
			jsonp_opts = canvas;
			return;
		}
		
		// Lets ensure this is an instance while also allowing the uGravity(canvas,opts) syntax
	    if (!(this instanceof uGravity)) {
			return new uGravity(canvas, opts);
	    }
		
		// A reference to our visible canvas
		var mousedown = false,
			last_position_x,
			last_position_y;
		

		// A reference to the in-memory canvas used as a back buffer 
        var backBuffer = document.createElement('canvas');
        backBuffer.width = canvas.width;
        backBuffer.height = canvas.height;
        var ctx = backBuffer.getContext('2d');

		// Creation of our inline worker to do our physics
		var blob = new Blob(["("+PhysicsWorker.toString()+")()"]),
			blobURL = window.URL.createObjectURL(blob),
			runningWorker;
		
		/**
		*
		* This method sets up everything.
		*
		**/
		this.init = function() {
		
			this.load(opts);
		
			/**
			*
			* Allow user to to zoom by using the scroll wheel.
			*
			**/
			canvas.addEventListener('mousewheel', function(e) {
				var wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 1000;
			
				// need to scale into the position of the cursor;
				this.scale *= 1 + wheelData;
				if(this.scale < 0)
					this.scale = 0.001;
				
				this.zooming = true;

				e.stopPropagation();
				e.preventDefault();
			
				if(!runningWorker) this.render();
			
				return false;
			}.bind(this), false);  
				

			/**
			*
			* Allow user to Pan by click and dragging.
			*
			**/
			canvas.addEventListener ("mousedown", 	function (event) { mousedown = true; });		
			canvas.addEventListener ("mouseup", 	function (event) { mousedown = false; last_position_x = null; last_position_y = null; });
			canvas.addEventListener ("mousemove", 	function (event) {
				if(mousedown) {
		            var x = event.clientX;
		            var y = event.clientY;
			
					if(last_position_x && last_position_y) {
						this.offsetX += ((x - last_position_x)/this.scale)*2;
						this.offsetY += ((y - last_position_y)/this.scale)*2;
					}
			
					last_position_x = x;
					last_position_y = y;
				
			
					if(!runningWorker) this.render();
				
				}
			
	        }.bind(this));
			
			/**
			*
			* Pinching and dragging (requires hammer js)
			*
			**/
			if(typeof Hammer != undefined) {
		        var hammertime = new Hammer(canvas, { drag_lock_to_axis: true });
				
				var original_x = null,
					original_y = null,
					original_scale = null;
				
		        hammertime.on("release drag pinch", function(ev) {
	        	
		            switch(ev.type) {
		                case 'drag':
							
							if(typeof original_x == "number") {
								this.offsetX = original_x + (ev.gesture.deltaX/this.scale)*2;
								this.offsetY = original_y + (ev.gesture.deltaY/this.scale)*2;
							} else {
								original_x = this.offsetX;
								original_y = this.offsetY;	
							}
							
							if(!runningWorker) this.render();
						
							break;
							
						case 'pinch':
							
							if(ev.gesture.scale) {
							
								if(typeof original_scale == "number") {
									this.scale = original_scale * ev.gesture.scale;
								} else {
									original_scale = this.scale;
								}
							
								if(!runningWorker) this.render();
							}
							
							break;
							
						case 'release':
							
							original_x = null;
							original_y = null;
							original_scale = null;
							
							break;
							
					}
				
		        }.bind(this));
				
				// Prevents overscroll animation
				// http://stackoverflow.com/questions/14307324/stop-overscroll-when-using-webkit-overflow-scrolling-touch
				canvas.addEventListener('touchmove',
				function(e) {
					e.preventDefault();
				}, false );
			}
			
		
			// If the options has the simulation start automatically, so be it.
			if(this.state == "start") this.start();
		}
		
		/**
		*
		* Load up our specific simulation options
		*
		**/
		this.load = function(opts) {
			// If we are running lets start it over after the settings update.
			var restart = !!runningWorker;
			this.stop();
			
			// Lets feed in all our settings
			extend(this, {
				
				// title of this project
				title: "",
				
				// Objects with mass
				objects: [],
				
				// Zoom Level
				scale: 80,
				
				// Panning of the screen
				offsetX: 0,
				offsetY: 0,
				
				// how fast time is moving 1x, 10x, etc
				timeScale: 1,
				
				// "start" or "stop" indicates whether its running or not.
				state: 'stop',
				
				// Frames per second for rendering
				fps: 30,
				
				// About how many cells accross fo the graph paper
				cellsAccross: 10,
			}, this.export(), opts);
	
			if(restart) {
				this.start();
			} else {
				this.render();				
			}

		};

		/**
		*
		* Export state and settings
		*
		**/
		this.export = function() {
			// Clone settings and return it
			return JSON.parse(JSON.stringify(this));	
		}

		/**
		*
		* Set scale in such that all objects are visible and set the viewport to be centered on the "center of gravity".
		*
		**/
		this.normalize = function() {
			
			// Lets set the center of the viewport to the center of gravity
			this.offsetX = 0;
			this.offsetY = 0;
			
			var max_scale = 0,
				objects = this.objects;

			// Lets find what scale would allow the object to be visible if the viewport is centered at 0,0 (center of gravity).
			if(objects.length > 1) {

				for(var i in objects) {
					var object = objects[i],
						max_scale_x  = Math.abs((canvas.width/ 2 - 70) / (object.x + object.radius)),// - (canvas.width/4),
						max_scale_y  = Math.abs((canvas.height/ 2 - 70) / (object.y + object.radius)),// - (canvas.height/4),
						obj_scale = ((max_scale_x < max_scale_y && max_scale != Infinity) || max_scale_y == Infinity ? max_scale_x : (max_scale_y != Infinity ? max_scale_y : null));
						
						if(obj_scale && !max_scale || max_scale > obj_scale) {
							max_scale = obj_scale;
						}
					
				}

				// Lets refresh our screen, if planets are screwy lets not normalize or we'll freeze the screen.
				if(max_scale > 0 && max_scale < Infinity) this.scale = max_scale;
				this.render();
					
			} else if(objects.length == 1) {
				var scale = Math.abs((canvas.height/ 2 - 70) / (this.objects[0].radius)) - (canvas.height/ 8);
				
				if(scale < Infinity && scale > 0) {
					this.scale = scale;
					this.render();
				}
			} else if(!objects.length){
				this.scale = 1;
				this.render();
			}
			
		}

	    /**
		*
		* Controls for running the simulation
		*
		**/		
		this.stop = function() {
			try { runningWorker.terminate();} catch(e) {}
			runningWorker = null;
		}
		
		this.start = function() {
			
			// Lets destory any workers that exisited before and create a new worker.
			try { runningWorker.terminate();} catch(e) {}
			runningWorker = new Worker(blobURL);
			runningWorker.onmessage = this.onmessage;
			runningWorker.postMessage(this.export());
		}
		
		this.isRunning = function() {
			return !!runningWorker;
		}
		
		/**
		*
		* Handles messages from our worker
		*
		**/
		this.onmessage = function(msg) {
			
			var data = msg.data,
				cmd  = data.cmd;

			switch(cmd) {
				case "render": 
					// Lets take in all the new State the Physics Worker gave us, and render the page.
					this.objects = data.objects;
					this.elapsedTime = data.elapsedTime;
					
					// requestAnimationFrame is called in the 
					//if(typeof requestAnimationFrame != undefined) 
					this.render();
						
					return;
				
				// @todo allow messages to be printed to the screen.
				case "print": console.log(data); return;
			}
			
		}.bind(this);

		/**
		*
		* Renders our scene
		*
		**/		
	    this.render = function () {
			
			var live_ctx = canvas.getContext('2d');
    
	        // Clear our drawing contexts
	        ctx.clearRect(0, 0, backBuffer.width, backBuffer.height);
			
			// Lets make a white background for the video.
	        ctx.rect(0, 0, backBuffer.width, backBuffer.height);
			ctx.fillStyle = 'white';
			ctx.fill();
			
			if(!this.onRender)
				live_ctx.clearRect(0, 0, canvas.width, canvas.height);

			/**
			*
			* Application rendering
			*
			**/
			
			// Lets center the viewport on the center of gravity.
			var avg_x = 0, avg_y = 0, total_mass = 0;
			
			this.objects.forEach(function(object) { total_mass += object.mass; });
			this.objects.forEach(function(object) {
				avg_x += object.x * (object.mass/total_mass);
				avg_y += object.y * (object.mass/total_mass);
			});			
			for(var i in this.objects) {
				this.objects[i].x = this.objects[i].x - avg_x;
				this.objects[i].y = this.objects[i].y - avg_y;
			}
			
			// Lets get a cell width that about fits the amount of squares accross.
			var cellWidth 	= this.scale;
			while(canvas.width / cellWidth > this.cellsAccross/2) { cellWidth = cellWidth * 2; }
			while(canvas.width / cellWidth < this.cellsAccross/2) { cellWidth = cellWidth / 2; }
			this.cellWidth = cellWidth;

			// Draw our graph paper
			this.drawGraphPaper();

	        // Draw our objects onto the back buffer
	        for (x in this.objects) {
	            this.drawObject(this.objects[x]);
	        }
			
			// Draw Scale box in left bottom corner.
			this.drawScaleBox();
			
			this.drawTimeBox();
			
			// Lets draw labels for objects that are too small
			this.drawLabels();
			
			this.drawTitle();
			
			/**
			*
			* Finished rendering our application
			*
			**/
    
	        // copy the back buffer to the displayed canvas
	        
			
			if(this.onRender)
				this.onRender(backBuffer);
			else
				live_ctx.drawImage(backBuffer, 0, 0);
			
			// if(this.worker && requestAnimationFrame)
			// 	requestAnimationFrame(this.render);
				
	    };
		
		this.drawTitle = function() {

			ctx.font = '72px Helvetica'; //HelveticaNeue-Light
			var width 		= ctx.measureText(this.title).width;
			
			ctx.textBaseline = "top"
			ctx.shadowColor = "#000"
			ctx.shadowBlur = 15;
			ctx.fillStyle = "#FFF";
			ctx.strokeStyle = "#000";
			ctx.lineWidth = 7;

			ctx.strokeText(this.title, canvas.width / 2 - width / 2, 20);
			ctx.fillText(this.title, canvas.width / 2 - width / 2, 20);

			ctx.textBaseline = "bottom";
			ctx.shadowColor = null;
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			ctx.shadowBlur = 0;
			
			
		};
		
		this.drawLabels = function() {
			
			var objects 	= this.objects,
				leftEdge 	= (this.scale * this.offsetX) + canvas.width/2,
				rightEdge 	= (this.scale * this.offsetX) - canvas.width/2,
				topEdge 	= (this.scale * this.offsetY) - canvas.height/2,
				bottomEdge  = (this.scale * this.offsetY) + canvas.height/2,
				paintArrow = function(x, y, dir) {


					ctx.beginPath();
					ctx.moveTo(x, y);

					if(dir == "down") {
						ctx.lineTo(x + 15, y + 30);
						ctx.lineTo(x, y + 25);
						ctx.lineTo(x - 15, y + 30);
						ctx.lineTo(x,y);	
					} else if(dir == "left") {
						ctx.lineTo(x + 30, y + 15);
						ctx.lineTo(x + 25, y);
						ctx.lineTo(x + 30, y - 15);
						ctx.lineTo(x,y);
					} else if(dir == "right") {
						ctx.lineTo(x - 30, y - 15);
						ctx.lineTo(x - 25, y);
						ctx.lineTo(x - 30, y + 15);
						ctx.lineTo(x,y);
					} else if(!dir) {
						ctx.lineTo(x - 15, y - 30);
						ctx.lineTo(x, y - 25);
						ctx.lineTo(x + 15, y - 30);
						ctx.lineTo(x,y);
					} else {
						// @todo Use some trig to have arrow wrap around corner.
						// ------
					}	// \
						//	\
					
					ctx.fillStyle = object.color;
					ctx.fill();
					
					ctx.lineWidth = 2;
					ctx.strokeStyle = "#000";
					ctx.stroke();
					
				};
			
			for(var i in objects) {
				var object = this.objects[i],
					radius = this.scale * object.radius,
					x = (this.scale * (object.x + this.offsetX)) + canvas.width/2,
					y = (this.scale * (object.y + this.offsetY)) + canvas.height/2,
					x2 = (this.scale * object.x) * -1,
					y2 = (this.scale * object.y) * -1;
				
				if(bottomEdge < y2 - 20) {
					paintArrow(x,0,"down");
				} else if(topEdge > y2 + 20) {
					paintArrow(x,canvas.height);
				} else if(leftEdge < x2) {
					paintArrow(0,y,"left");
				} else if(rightEdge > x2) {
					paintArrow(canvas.width,y,"right");
				} else if(radius < 6) {
					
					// upside down arrow ontop of page.
					// if(topEdge - 150 > y2) {
					// 	y += radius + 10;
					// 	paintArrow(x,y,true);
					// } else {
						// Lets make sure the arrow is on top of the object.
						paintArrow(x,y - radius - 10);
						//}

				}
				
				
				
			}
			
		};
		
		this.drawScaleBox = function() {
			function addCommas(nStr) {
				nStr += '';
				x = nStr.split('.');
				x1 = x[0];
				x2 = x.length > 1 ? '.' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ',' + '$2');
				}
				return x1 + x2;
			}
			
			var cellWidthText, units;
			
			if(this.cellWidth / this.scale > 0.01) {
				cellWidthText = Math.round(this.cellWidth / this.scale * 100000) / 100000;
				units = "AU";
			} else {
				cellWidthText = Math.round(this.cellWidth / this.scale * 1.496e+8);
				units = "km";
			}
				
				

			ctx.font = '24px HelveticaNeue-Light';
			
			var roundedScale = addCommas(cellWidthText) + " " + units,
				textWidth 	 = ctx.measureText(roundedScale).width,
				height 		= 40,
				padding 	= 20,
				textPadding	= 8,
				width = textPadding * 3 + padding + textWidth + this.cellWidth;
			
			ctx.fillStyle = "#FFF";
			ctx.strokeStyle = "black";
			ctx.shadowBlur = 15;
			ctx.fillRect(padding,canvas.height - height - padding,width,height);
			ctx.shadowBlur = 0;
			
			ctx.lineWidth = 2;
			ctx.strokeRect(padding, canvas.height - height - padding, width, height);
			
			ctx.fillStyle = "#000000";
			ctx.fillText(roundedScale,padding + textPadding + 5,canvas.height - padding - textPadding);
			
			ctx.beginPath();
			ctx.lineWidth = 3;
			ctx.moveTo(padding + 3 * textPadding + textWidth, canvas.height - (1.5*padding) - textPadding - 5);
			ctx.lineTo(padding + 3 * textPadding + textWidth, canvas.height - padding - textPadding - 5);
			ctx.lineTo(padding + 3 * textPadding + textWidth + this.cellWidth, canvas.height - padding - textPadding - 5);
			ctx.lineTo(padding + 3 * textPadding + textWidth + this.cellWidth, canvas.height - (1.5*padding) - textPadding - 5);
			ctx.stroke();
			
			
		};
		
		this.drawTimeBox = function() {
			function addCommas(nStr) {
				nStr += '';
				x = nStr.split('.');
				x1 = x[0];
				x2 = x.length > 1 ? '.' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ',' + '$2');
				}
				return x1 + x2;
			}
			
			var text;

			text = Math.round(this.elapsedTime) + " seconds";
			
			if(this.elapsedTime > 60 * 5) {
				text = addCommas(Math.round(this.elapsedTime/60)) + " minutes";
			}
			if(this.elapsedTime > 60 * 60 * 5) {
				text = addCommas(Math.round(this.elapsedTime/60/60)) + " hours";
			}
			if(this.elapsedTime > 60 * 60 * 24 * 5) {
				text = addCommas(Math.round(this.elapsedTime/60/60/24)) + " days";
			}
			if(this.elapsedTime > 60 * 60 * 24 * 365 * 10) {
				text = addCommas(Math.round(this.elapsedTime/60/60/24/365)) + " years";
			}

			// 	units = "AU";
			// } else {
			// 	cellWidthText = Math.round(this.cellWidth / this.scale * 1.496e+8);
			// 	units = "km";
			// }
				
				

			ctx.font = '24px HelveticaNeue-Light';
			
			var textWidth 	 = ctx.measureText(text).width,
				height 		= 40,
				padding 	= 20,
				textPadding	= 8,
				width = textPadding + padding + textWidth;
			
			ctx.fillStyle = "#FFF";
			ctx.strokeStyle = "black";
			ctx.shadowBlur = 15;
			ctx.fillRect(canvas.width - padding - width,canvas.height - height - padding,width,height); // 
			ctx.shadowBlur = 0;
			
			ctx.lineWidth = 2;
			ctx.strokeRect(canvas.width - padding - width, canvas.height - height - padding, width, height); // canvas.height - 
			
			ctx.fillStyle = "#000000";
			ctx.fillText(text, canvas.width - (padding + textPadding - 20) - width, canvas.height - padding - textPadding); 
			
		};
		
		
		this.drawGraphPaper = function() {
			var cellWidth 	= this.cellWidth; 
			
				// Lets make sure that 0,0 is an intersection of graph lines
			var yAlignment = (canvas.height / 2) % cellWidth,
				xAlignment = (canvas.width  / 2) % cellWidth,
				
				// lets determine the first position of the graph lines inside the viewport in respect to the offest from point 0,0
				startX = (this.offsetX * this.scale) % cellWidth + xAlignment,
				startY = ((this.offsetY * this.scale) % cellWidth) + yAlignment;
			
			/**
			*
			* x,y values refer to the x,y cordinates in respect to the canvas
			*
			**/
			
			for(var x = startX; x <= canvas.width; x+= cellWidth) {
				
				var point = Math.abs((x - canvas.width/2)/this.scale - this.offsetX);
				
				ctx.lineWidth = 1;
				ctx.strokeStyle = "#ccc";
			    ctx.beginPath();
			    ctx.moveTo(x,0);
			    ctx.lineTo(x,canvas.height);
			    ctx.stroke();
			}
			
			for(var y = startY; y <= canvas.height; y+= cellWidth) {
				
				var point = Math.abs((y - canvas.height/2)/this.scale - this.offsetY);
				
				ctx.lineWidth = 1;
				ctx.strokeStyle = "#ccc";
			    ctx.beginPath();
			    ctx.moveTo(0,y);
			    ctx.lineTo(canvas.width,y);
			    ctx.stroke();
			}
			
			
			
			ctx.beginPath();
			
			var centerX = (this.scale * this.offsetX) + canvas.width/2,
				centerY = (this.scale * this.offsetY) + canvas.height/2;
			
			ctx.arc(centerX,centerY,3,0,Math.PI*2,true); // Outer circle
			
			ctx.fillStyle = '#000';
			ctx.fill();
			
			
			
		}

		/**
		*
		* Render an individual object
		*
		**/
		this.drawObject = function(object) {

			object.scaledX 		= (this.scale * (object.x + this.offsetX)) + canvas.width/2;
			object.scaledY 		= (this.scale * (object.y + this.offsetY)) + canvas.height/2;
			object.scaledRadius = this.scale * object.radius;
	
			ctx.beginPath();
			ctx.arc(object.scaledX,object.scaledY,object.scaledRadius,0,Math.PI*2,true);
			ctx.fillStyle = object.color;
			ctx.lineWidth = 0;
			ctx.fill();
		}
		
		this.init();
		
		return this;
	}
	
	function PhysicsWorker() {
		// NOTE: Assume nothing about the host environment or scope because this is thrown in an inline web worker

		/**
		*
		* This worker expects options, and will start running the simulation when it recieves them.
		*
		**/
		onmessage = function(msg) {
			var opts = msg.data,
				//numFrames = 0,
				
				// These variables keep track of time passed.
				elapsedTime = opts.elapsedTime,
				lastFrame 	= new Date().getTime(),
				lastRender	= new Date().getTime(),
				seconds_between_frames = 1 / opts.fps;
		
			/**
			*
			* Lets make the physics as continuous as possible.
			*
			**/
			while(1) {
			
				//numFrames++;
			
					// calculate the time since the last frame
		        var thisFrame = new Date().getTime(),
					
					// Lets see the time difference (seconds)
					dt = (thisFrame - lastFrame)/1000 * opts.timeScale;
				
				// Lets keep track of the elapsed time.
				elapsedTime += dt;
				
				// lets set our lastFrame for next time.
		        lastFrame = thisFrame;
			
				if(seconds_between_frames < (thisFrame - lastRender)/1000) {
					// Lets indicate its time to render
					postMessage({cmd: "render", objects: opts.objects, elapsedTime: elapsedTime});
					//numFrames = 0;
					lastRender = thisFrame;
				}

				// Lets apply Universal Gravity from all objects, applied to all other objects.
				for(var i in opts.objects) {
					var object = opts.objects[i];
				
					for(var j in opts.objects) {
						var otherObject = opts.objects[j];
				
						if(otherObject.mass && otherObject.name != object.name) {
	
							// http://www.arachnoid.com/ruby/gravity/index.html
							var getDistance 	= function(a,b) { return Math.pow(Math.pow(b[1]-a[1], 2) + Math.pow(b[0]-a[0], 2), 0.5); },
						
								m_in_au = 1.496e11,
						
								G 				= 6.674*Math.pow(10, -11),
			
								// distance formula
								slope 			= (otherObject.y - object.y)/(otherObject.x - object.x),
								angle 			= Math.atan(slope),
								distance 		= getDistance([otherObject.x, otherObject.y], [object.x, object.y])*m_in_au, // AU to meters
								
								// N*(m^2/kg^2) * (kg * kg) / m = N*m = 1kg*m^2/s^2
								
								force  			= G * (object.mass * otherObject.mass) / Math.pow(distance, 2) / m_in_au, 	// F = ma = 1kg(m/s^2)
	
								// http://zonalandeducation.com/mstm/physics/mechanics/forces/forceComponents/forceComponents.html
								xForce = force * Math.cos(angle),
								yForce = force * Math.sin(angle),
	
								//a = f/m1 because F = m*a
								// lets then convert m/s^2 to AU/s^2
								xAcceleration = Math.abs(xForce / object.mass),// * (object.x < this.x ? -1 : 1),
								yAcceleration = Math.abs(yForce / object.mass);// * (object.y < this.y ? -1 : 1);
		
								opts.objects[i].force = force;
		
								if(object.x < otherObject.x)
									opts.objects[i].velocityX += xAcceleration*dt;
								else
									opts.objects[i].velocityX -= xAcceleration*dt;
				
								if(object.y < otherObject.y)
									opts.objects[i].velocityY += yAcceleration*dt;
								else
									opts.objects[i].velocityY -= yAcceleration*dt;
			
								// if there is a collision reverse FORCE.
								// http://www.physicsclassroom.com/Class/momentum/U4L2a.cfm
		
						}
					}
					
					// move objects a little bit
					opts.objects[i].x += (object.velocityX) * dt;
					opts.objects[i].y += (object.velocityY) * dt;
				}		
				
			}
		
		};
	}

	/**
	*
	* Gather all the canvases with the data-ugravity-src attribute
	* and load the assigned jsonp datafile for each canvas.
	*
	**/
	if(typeof document != "undefined") {
		var elements = document.querySelectorAll("canvas[data-ugravity-src]");
	
		for(var i in elements) {
			(function(element) {
				if(element.getAttribute) {
					// Get the path of the data file
					var src = element.getAttribute("data-ugravity-src");
		
					// Load our jsonp datafile by appending a script tag to the head.
					var se = document.createElement('script');
					se.setAttribute('type', 'text/javascript');
					se.setAttribute('src', src);
			
					se.onload = function () {
						// Throw an error if the datafile did not load correctly.
						if(!jsonp_opts || typeof jsonp_opts != "object") {
							throw "Error loading uGravity datafile: " + src;
						} else {
							new uGravity(element, jsonp_opts);
						}
					
						// Make certain this temporary variable is reset between uGravity script loads
						jsonp_opts = null;
					}
					document.getElementsByTagName('head').item(0).appendChild(se);
				}
			})(elements[i]);
		}
	}
	
	return uGravity;

});
},{}]},{},[11])
;