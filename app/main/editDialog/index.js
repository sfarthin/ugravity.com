var html 	= require('fs').readFileSync(__dirname + '/template.html', 'utf-8').toString(),
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