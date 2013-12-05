var html = require('fs').readFileSync(__dirname + '/template.html', 'utf-8').toString(),
	ObjectDropdown = require("./objectDropdown/index"),
	div;

module.exports = function(window, document) {
	
	return {
		
		listeners: {},
		
		navButtons: [
			"normalize",
			"start",
			"stop",
			"reset",
			"save",
			"new"
		],
		
		on: function(msg, func) {
			
			if(!this.listeners[msg])
				this.listeners[msg] = [];
				
			this.listeners[msg].push(func);
			
		},
		
		trigger: function(msg) {
			
			if(this.listeners[msg]) {
				for(var i in this.listeners[msg]) {
					this.listeners[msg][i]();
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
			
			div.querySelector("li.dropdown").addEventListener('mouseover', this.dropdownMouseover, false);
			div.querySelector("li.dropdown").addEventListener('mouseout', this.dropdownMouseout, false);
			
			
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
			
			this.objectDropdown = new ObjectDropdown(document, div.querySelector(".navbar-right .dropdown:last-child"));
			
			this.objectDropdown.on("newobject", function() {
				this.trigger("newobject");
			}.bind(this));
			
		},
		
		dropdownMouseover: function(e) {
			e.currentTarget.className = e.currentTarget.className + " open";
		},
		
		dropdownMouseout: function(e) {
			e.currentTarget.className = e.currentTarget.className.replace(" open","");
		},
		
		updateObjects: function(objects) {
			
			this.objectDropdown.update(objects);
				
			
		},
		
		remove: function() {
			div.querySelector("li.dropdown").removeEventListener('mouseover', this.dropdownMouseover, false);
			div.querySelector("li.dropdown").removeEventListener('mouseout', this.dropdownMouseout, false);
			div.querySelector(".nav li").removeEventListener('click', this._clickListener, false);
			
			document.body.removeChild(div);
			div = null;
		}
	};
}