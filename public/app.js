;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(window, document, router, onLoad) {
	
	document.body.innerHTML = "adsadasdas";
	onLoad();
	
}
},{}],2:[function(require,module,exports){
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
},{"debounce":11,"ugravity":13}],3:[function(require,module,exports){
var html = "<!-- <div name=\"newModal\" class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"newModal\" aria-hidden=\"false\" style=\"display: block;\"> -->\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button> -->\n\t\t\t\t<h4 class=\"modal-title\">Object Properties</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"form-horizontal\" role=\"form\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"col-sm-5 control-label\">Presets</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<button class=\"btn remove btn-default\" data-preset=\"earth\">Earth</button>\n\t\t\t\t\t\t\t<button class=\"btn remove btn-default\" data-preset=\"sun\">Sun</button>\n\t\t\t\t\t\t\t<button class=\"btn remove btn-default\" data-preset=\"moon\">Moon</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<!-- General -->\n\t\t\t\t\t<div class=\"page-header\"><h5>General</h5></div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"col-sm-5 control-label\">Name</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"col-sm-5 control-label\">Color</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<select class=\"form-control\" name=\"color\">\n\t\t\t\t\t\t\t\t<option value=\"#FF0000\">Red</option>\n\t\t\t\t\t\t\t\t<option value=\"#00FF00\">Green</option>\n\t\t\t\t\t\t\t\t<option value=\"#0000FF\">Blue</option>\n\t\t\t\t\t\t\t\t<option value=\"#FFFF00\">Yellow</option>\n\t\t\t\t\t\t\t\t<option value=\"#660099\">Purple</option>\n\t\t\t\t\t\t\t\t<option value=\"#CC3300\">Orange</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"mass\" class=\"col-sm-5 control-label\">Mass (kg)</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"mass\" placeholder=\"(i.e. 2.0255e+25)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"radius_in_km\" class=\"col-sm-5 control-label\">Radius (km)</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"radius_in_km\" placeholder=\"(e.g., the Earth's radius is 6,371 km)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<!-- Position -->\n\t\t\t\t\t<div class=\"position_group\">\n\t\t\t\t\t\t<div class=\"page-header\"><h5>Position relative to another object</h5></div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"relative_object\" class=\"col-sm-5 control-label\">Object</label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"relative_object\">\n\t\t\t\t\t\t\t\t{objects}\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"relative_object_distance\" class=\"col-sm-5 control-label\">Distance (AU)</label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"relative_object_distance\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"relative_object_direction\" class=\"col-sm-5 control-label\">Direction (degrees)<span class=\"glyphicon glyphicon-circle-arrow-up direction\"></span></label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" min=\"0\" max=\"360\" step=\"5\" value=\"0\" name=\"relative_object_direction\">\n\t\t\t\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" name=\"direction\" placeholder=\"(i.e. 45)\"> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"page-header\"><h5>Velocity</h5></div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"velocity\" class=\"col-sm-5 control-label\">Velocity (AU/second)</label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"velocity\" placeholder=\"(i.e. 0.000006 to stay in orbit)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"velocity_direction\" class=\"col-sm-5 control-label\">Velocity direction (degrees)<span class=\"glyphicon glyphicon-circle-arrow-up velocity_direction\"></span></label>\n\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" min=\"0\" max=\"360\" step=\"5\" value=\"0\" name=\"velocity_direction\">\n\t\t\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" name=\"velocity_direction\" placeholder=\"(i.e. 45)\"> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn remove btn-default\" data-dismiss=\"modal\">Remove Object</button>\n\t\t\t\t<button type=\"button\" class=\"btn save btn-primary\" data-dismiss=\"modal\">Save Object</button>\n\t\t\t</div>\n\t\t</div><!-- /.modal-content -->\n\t</div><!-- /.modal-dialog -->\n<!-- </div> -->".toString();

module.exports = function(window, document, router) {
	
	var div 		= document.createElement("div");
	var backdrop 	= document.createElement("div");
	
	var get_value = function(name) { return div.querySelector("[name="+name+"]").value; },
		set 	  = function(name, value) { try { return div.querySelector("[name="+name+"]").value = value; } catch(e) { console.log("cannot set " + name); }  };
	
	
	var api = {
		listeners: {},
		on: function(msg, func, context) {
			
			if(!this.listeners[msg])
				this.listeners[msg] = [];
				
			this.listeners[msg].push({func: func, context: context});
			
		},
		trigger: function(msg) {
			
			if(this.listeners[msg]) {
				for(var i in this.listeners[msg]) {
					var func 	= this.listeners[msg][i].func,
						context	= this.listeners[msg][i].context;
					
					func.apply((context ? context : this), [].slice.call(arguments, 1));
				}
			}
			
		},
		
		open: function(settings, editObject) {
			
			div.innerHTML = html.replace(/{link}/g, window.location.protocol+"//"+window.location.host+"/project/"+encodeURI(JSON.stringify(settings)));
			
			// Build dropdown for the relative object list
			var objects_html = [], j = 0;
			settings.objects.sort(function(a,b) {
				if(a.mass < b.mass) return 1; else return -1;
			}).forEach(function(object) {
				objects_html[j++] = "<option value='"+escape(object.id)+"'>"+object.name+"</option>";
			});
			
			// If there are no objects or if the object has a position already without a relative object
			if((!editObject && !settings.objects.length) || (editObject && !editObject.relative_object)) {
				div.querySelector(".position_group").style.display = "none";
			} else {
				div.innerHTML = html.replace(/{objects}/g, objects_html.join(""));
			}
			
			// If we are editing an object that already exists, lets set the form fields.
			if(editObject) {
				var fields = ["name", "color", "mass", "radius_in_km", "relative_object", "relative_object_distance", "relative_object_direction", "velocity", "velocity_direction"];
				
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

						var x, y,
							relative_object_id = get_value("relative_object"),
							distance  		  = Number(get_value("relative_object_distance")),
							direction_radians = Number(get_value("relative_object_direction")) * Math.PI / 180,
							relative_object   = settings.objects.filter(function(object) {
													return object.id == relative_object_id;
												})[0];
						
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
							velocity 				   = Number(get_value("velocity"));
							
						var updatedObject = {
							// Essiential
							id: 		(editObject && editObject.id ? editObject.id : new Date().getTime()+"-"+Math.round((Math.random()*100))),
							"name": 	get_value("name"),
							"color": 	get_value("color"),
							"mass": 	Number(get_value("mass").replace(/,/g, "")),
							"radius": 	Number(get_value("radius_in_km").replace(/,/g, ""))/(1.496e+8), // convert kilometers to AU
							"y": 		Number(y),
							"x": 		Number(x),
							"velocityX": (Math.sin(velocity_direction_radians)*velocity),
							"velocityY": (Math.cos(velocity_direction_radians)*velocity),
							
							// Additional for uGravity.com.. we can keep these as text so we can use equations.
							"radius_in_km":    get_value("radius_in_km"),
							"relative_object": get_value("relative_object"),
							"relative_object_distance": get_value("relative_object_distance"),
							"relative_object_direction":get_value("relative_object_direction"),
							"velocity": get_value("velocity"),
							"velocity_direction": get_value("velocity_direction"),
						};
						
						this.trigger("save", updatedObject);
					} else if(e.toElement.className.match("remove")) {
						this.trigger("remove", editObject);
					}
					this.close();
				}
				
				
				if(e.toElement.getAttribute("data-preset")) {
					var preset = e.toElement.getAttribute("data-preset");
					
					if(preset == "earth") {
						set("name", "Earth");
						set("mass", 5.9721986e+24);
						set("radius_in_km", 6371);
						set("relative_object_distance", 1);
						set("velocity_direction", 90);
						
						// Earth moves at 67000 miles/hr
						// 92955807.3 miles in one AU
						set("velocity", 67000/ 92955807.3 / 60 / 60);
						
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
			
		},
		
		close: function() {
			
			div.querySelector(".modal-content").removeEventListener("click", this._modalContentListener, false);			
			div.querySelector("[name=velocity_direction]").removeEventListener("keyup", this._velocityDirectionListener, false);
			div.querySelector("[name=velocity_direction]").removeEventListener("change", this._velocityDirectionListener, false);
			div.querySelector("[name=relative_object_direction]").removeEventListener("keyup", this._directionListener, false);
			div.querySelector("[name=relative_object_direction]").removeEventListener("change", this._directionListener, false);
			
			document.body.removeChild(backdrop);
			document.body.removeChild(div);
			
			div = null;
		}
	};
	

	div.id = "editModal";
	div.className = "modal fade In";
	div.setAttribute("tabindex", -1);
	div.setAttribute("role", "dialog");
	div.setAttribute("aria-labelledby", "editModal");
	div.setAttribute("aria-hidden", "false");
	div.style.display = "block";
	

	backdrop.className = "modal-backdrop fade in";
	
	return api;
	
}
},{}],4:[function(require,module,exports){
// var ObjectList = ,
// 	template = require('micro-template').template;
// 	
// template.get = function (id) { return require('fs').readFileSync(id + '.html', 'utf-8').toString() };

var Navigation	= require("./navigation/index"),
	Canvas 		= require("./canvas/index.js"),
	ObjectList 	= require("./object-list/index.js"),
	SaveDialog  = require("./saveDialog/index"),
	EditDialog 	= require("./editObject/index");

module.exports = function(window, document, router, onLoad) {
	
	var settings,
		empty = {objects: []},
		changeSettings = function(new_settings) {
			settings = new_settings;
			
			// Lets update our navigation pulldown
			navigation.updateObjects(settings.objects);
			
			// Lets let ugravity simulation know.
			canvas.update(settings);
			
			// lets save it in local storage in case for a page reload.
			localStorage["ugravity-last-project"] = JSON.stringify(settings);
			
			canvas.normalize();
			
		};
	
	if(window.location.href.match("project/")) {
		try {
			settings = JSON.parse(decodeURI(window.location.href.match(/project\/(.+)$/)[1]));
			localStorage["ugravity-last-project"] = JSON.stringify(settings);
			router.update("/", {replace: true});
		} catch(e) {}
				
	} else {
		if(window.localStorage && localStorage["ugravity-last-project"]) {
			settings = JSON.parse(localStorage["ugravity-last-project"]);
		}
	}
	
	// Lets assign ids if there are none.
	if(settings && settings.objects) {
		for(var i in settings.objects) {
			if(!settings.objects[i].id)
				settings.objects[i].id = i;
		}
	}
	
	
	if(!settings)
		settings = empty;
	
	
	var navigation = new Navigation(window, document),
		canvas 	   = new Canvas(	window, document, router, navigation, settings),
		objectList = new ObjectList(window, document),
		saveDialog = new SaveDialog(window, document, router);
	
	navigation.add();
	canvas.add();
	
//	canvas.normalize();
	
	navigation.on("save", function() {
		saveDialog.open(settings);
	});
	
	navigation.on("new", function() {
		canvas.update(empty);
		changeSettings(empty);
		localStorage["ugravity-last-project"] = JSON.stringify(empty);
	});
	
	navigation.on("newobject", function() {
		var dialog = new EditDialog(window, document, router);
		
		dialog.open(settings);
		
		dialog.on("save", function(object) {
			settings.objects.push(object);
			changeSettings(settings);
		});
		
	});
	
	navigation.on("editobject", function(objectid) {
		
		
		
		var dialog = new EditDialog(window, document, router),
			editObject = settings.objects.filter(function(o) {
				return o.id == objectid;
			})[0];
		
		// lets remove it from the settings...
		settings.objects = settings.objects.filter(function(object) {
			return objectid != object.id;
		});
		
		changeSettings(settings);
		
		dialog.open(settings, editObject);
		
		dialog.on("save", function(object) {
			settings.objects.push(object);
			changeSettings(settings);
		});
		
	});
	
	onLoad();
};
},{"./canvas/index.js":2,"./editObject/index":3,"./navigation/index":5,"./object-list/index.js":7,"./saveDialog/index":8}],5:[function(require,module,exports){
var html = "<!-- <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\"> -->\n\t<div class=\"container-fluid\">\n\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t<li class=\"normalize\"><a><span class=\"glyphicon glyphicon-resize-full\"></span> Fit to View</a></li>\n\t\t\t<li class=\"reset\"><a><span class=\"glyphicon glyphicon-refresh\"></span> Reset</a></li>\n\t\t\t<li class=\"start\"><a><span class=\"glyphicon glyphicon-play\"></span> Start</a></li>\n\t\t\t<li class=\"stop\" style=\"display:none\"><a><span class=\"glyphicon glyphicon-pause\"></span> Pause</a></li>\n\t\t</ul>\n\t\t\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand active\">uGravity</a>\n\t\t</div>\n\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Project <b class=\"caret\"></b></a>\n\t\t\t\t\t<ul class=\"dropdown-menu project\">\n\t\t\t\t\t\t<li class=\"new\"><a><span class=\"glyphicon glyphicon-flash\"></span> New Project</a></li>\n\t\t\t\t\t\t<li class=\"save\"><a><span class=\"glyphicon glyphicon-floppy-save\"></span> Save Project</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"dropdown objects\">\n\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Objects <b class=\"caret\"></b></a>\n\t\t\t\t\t<!-- <ul class=\"dropdown-menu objects\"></ul> -->\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n<!-- </div> -->".toString(),
	ObjectDropdown = require("./objectDropdown/index"),
	div;

module.exports = function(window, document) {
	
	return {

		navButtons: [
			"normalize",
			"start",
			"stop",
			"reset",
			"save",
			"new"
		],
		
		listeners: {},
		on: function(msg, func, context) {
			
			if(!this.listeners[msg])
				this.listeners[msg] = [];
				
			this.listeners[msg].push({func: func, context: context});
			
		},
		trigger: function(msg) {
			
			console.log(msg, this.listeners);
			
			if(this.listeners[msg]) {
				for(var i in this.listeners[msg]) {
					var func 	= this.listeners[msg][i].func,
						context	= this.listeners[msg][i].context;
					
					func.apply((context ? context : this), [].slice.call(arguments, 1));
				}
			}
			
		},
		
		add: function() {

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
			
			[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(d) { d.addEventListener('mouseover', this.dropdownMouseover, false); }.bind(this));
			[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(d) { d.addEventListener('mouseout', this.dropdownMouseout, false); }.bind(this));
			
			
			this._clickListeners = {};
			var triggerOnClick = function(i) {
				
				this._clickListeners[i] = function(e) {
					
					if(i == "stop") {
						div.querySelector(".nav li.start").style.display = "block";
						div.querySelector(".nav li.stop").style.display = "none";
					} else if(i == "start") {
						div.querySelector(".nav li.start").style.display = "none";
						div.querySelector(".nav li.stop").style.display = "block";
					}
					
					this.trigger(i);
					e.stopPropagation();
				}.bind(this);
				
				div.querySelector(".nav li."+i).addEventListener('click', this._clickListeners[i], false);
				
			}.bind(this);
			
			this.navButtons.forEach(triggerOnClick);
			
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
			
		},
		
		dropdownMouseover: function(e) {
			e.currentTarget.className = e.currentTarget.className + " open";
		},
		
		dropdownMouseout: function(e) {
			e.currentTarget.className = e.currentTarget.className.replace(/ open/g,"");
		},
		
		updateObjects: function(objects) {
			this.objectDropdown.update(objects);
		},
		
		remove: function() {
			[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(d) {d.removeEventListener('mouseover', this.dropdownMouseover, false); }.bind(this));
			[].splice.call(div.querySelectorAll("li.dropdown"),0).forEach(function(d) {d.removeEventListener('mouseout', this.dropdownMouseout, false); }.bind(this));
			div.querySelector(".nav li").removeEventListener('click', this._clickListener, false);
			
			document.body.removeChild(div);
			div = null;
		}
	};
}
},{"./objectDropdown/index":6}],6:[function(require,module,exports){
module.exports = function(document, element) {

	var dropdown_ul = document.createElement("ul");
	dropdown_ul.className = "dropdown-menu objects";
	element.appendChild(dropdown_ul);
	
	return {
		listeners: {},
		on: function(msg, func, context) {
			
			if(!this.listeners[msg])
				this.listeners[msg] = [];
				
			this.listeners[msg].push({func: func, context: context});
			
		},
		trigger: function(msg) {
			
			if(this.listeners[msg]) {
				for(var i in this.listeners[msg]) {
					var func 	= this.listeners[msg][i].func,
						context	= this.listeners[msg][i].context;
					
					func.apply((context ? context : this), [].slice.call(arguments, 1));
				}
			}
			
		},
		
		
		update: function(objects) {
			var html = [], j = 0;
	
			if(!objects || objects.length) {
	
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
			
			this._addListener = function() { this.trigger("newobject") }.bind(this);
			dropdown_ul.querySelector("li.add").addEventListener("click", this._addListener, false);
			
			this._editListener = function(e) { this.trigger("editobject", e.currentTarget.getAttribute("data-objectid")); }.bind(this);
			[].splice.call(dropdown_ul.querySelectorAll("li.object"),0).forEach(function(d) { d.addEventListener("click", this._editListener, false); }.bind(this));
			
		}
	}
}
},{}],7:[function(require,module,exports){
var html = "<div class=\"panel-heading\">Objects</div>\n<div class=\"list-group\"></div>",
	div;

module.exports = function(window, document) {
	
	// var $ 		 = window.$,
	// 	document = window.document,
	// 	element  = $(html);
		
	//$(document.body).append(element);
	
	return {
		add: function() {
			
			if(!div) {

				div_in_dom = document.getElementById("main-list");

				if(div_in_dom) {
					div = div_in_dom;
				} else {
					div = document.createElement("div");
				}
		
				div.innerHTML = html;
				div.id = "main-list";
				div.className = 'panel panel-primary';
				div.setAttribute("role", "list");	
				
				if(!div_in_dom)
					document.body.appendChild(div);
			}
			
		},
		remove: function() {
			div.remove();
		}
	}	
}
},{}],8:[function(require,module,exports){
var html = "<!-- <div id=\"saveModal\" class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"saveModal\" aria-hidden=\"false\" style=\"display: block;\"> -->\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button> -->\n\t\t\t\t<h4 class=\"modal-title\">Save Project</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<p>Link to, save or share your current project using the unique permalink below. In addition, you can save this project to your web favorites by pressing CTRL-D (COMMAND-D on a Mac) now.</p>\n\n\t\t\t\t<p><a href=\"{link}\" target=\"_blank\" style=\"word-wrap: break-word;\">{link}</a></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Return to Project</button>\n\t\t\t</div>\n\t\t</div><!-- /.modal-content -->\n\t</div><!-- /.modal-dialog -->\n<!-- </div> -->".toString();

module.exports = function(window,document, router) {
	
	var div = document.createElement("div");
	var backdrop = document.createElement("div");
	
	
	var api = {
		open: function(settings) {
			
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
			
		},
		
		close: function() {
			router.update("", {replace: true});
			
			div.querySelector(".modal-content").removeEventListener("click", this._modalContentListener, false);
			div.removeEventListener("click", this._closeListener, false);
			div.querySelector("button").removeEventListener("click", this._modalContentListener, false);
			
			document.body.removeChild(backdrop);
			document.body.removeChild(div);
		}
	};
	

	div.id = "saveModal";
	div.className = "modal fade In";
	div.setAttribute("tabindex", -1);
	div.setAttribute("role", "dialog");
	div.setAttribute("aria-labelledby", "saveModal");
	div.setAttribute("aria-hidden", "false");
	div.style.display = "block";
	

	backdrop.className = "modal-backdrop fade in";
	
	return api;
	
}
},{}],9:[function(require,module,exports){
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
},{"./routes":10,"location-bar":12}],10:[function(require,module,exports){
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
},{"./about.js":1,"./main/index.js":4}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
			canvas.addEventListener ("mousedown", function (event) { mousedown = true; });		
			canvas.addEventListener ("mouseup", function (event) { mousedown = false; last_position_x = null; last_position_y = null; });
			canvas.addEventListener ("mousemove", function (event) {
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
			
			// Lets draw labels for objects that are too small
			this.drawLabels();
			
			this.drawTitle();
			
			/**
			*
			* Finished rendering our application
			*
			**/
    
	        // copy the back buffer to the displayed canvas
	        live_ctx.drawImage(backBuffer, 0, 0);
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
				
				// if(point < 0.00000000002) {
				// 	ctx.lineWidth = 0.5;
				// // } else if(Math.floor(point / ((cellWidth + xAlignment)/this.scale)) % 5 < 0.0000002) {
				// // 	ctx.lineWidth = 0.5;
				// } else {
					ctx.lineWidth = 0.1;
					//}
			    ctx.beginPath();
			    ctx.moveTo(x,0);
			    ctx.lineTo(x,canvas.height);
			    ctx.stroke();
			}
			
			for(var y = startY; y <= canvas.height; y+= cellWidth) {
				
				var point = Math.abs((y - canvas.height/2)/this.scale - this.offsetY);
				
				// if(point < 0.00000000002) {
				// 	ctx.lineWidth = 0.5;
				// } else {
					ctx.lineWidth = 0.1;
					//}
				
				ctx.strokeStyle = "black";
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
					
					// Lets see the time difference
					dt = (thisFrame - lastFrame)/1000 * opts.timeScale;
					
				// lets set our lastFrame for next time.
		        lastFrame = thisFrame;
			
				if(seconds_between_frames < (thisFrame - lastRender)/1000) {
					// Lets indicate its time to render
					postMessage({cmd: "render", objects: opts.objects});
					//numFrames = 0;
					lastRender = thisFrame;
				}

				// Lets apply Universal Gravity from all objects, applied to all other objects.
				for(var i in opts.objects) {
					var object = opts.objects[i];
				
					for(var j in opts.objects) {
						var otherObject = opts.objects[j];
				
						if(otherObject.mass && otherObject.name != object.name) {
	
							// Using our favorite F = G (m1*m2)/r^2
							// r = distance between the centers of the masses
							// G = 6.67 × 10^-8 gm^-1 cm^3 sec^-2
							var getDistance 	= function(a,b) { return Math.pow(Math.pow(b[1]-a[1], 2) + Math.pow(b[0]-a[0], 2), 0.5); },
						
								G 				= 6.67*Math.pow(10, -32),
			
								// distance formula
								slope 			= (otherObject.y - object.y)/(otherObject.x - object.x),
								angle 			= Math.atan(slope),
								distance 		= getDistance([otherObject.x, otherObject.y], [object.x, object.y]), 	// AU
								force  			= G * (object.mass * otherObject.mass) / Math.pow(distance, 2), 	// kg/s^2
	
								// http://zonalandeducation.com/mstm/physics/mechanics/forces/forceComponents/forceComponents.html
								xForce = force * Math.cos(angle),
								yForce = force * Math.sin(angle),
	
								//a = f/m1 because F = m*a
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
					
					// Lets move each object that little bit.
					opts.objects[i].x += object.velocityX * dt;
					opts.objects[i].y += object.velocityY * dt;
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
},{}]},{},[9])
;