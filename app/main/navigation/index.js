var html = require('fs').readFileSync(__dirname + '/template.html', 'utf-8').toString(),
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
					
					if(i == "new" || i == "save") {
						try { _paq.push(['trackPageView', 'project/'+i]); } catch(e) {}							
					} else {
						try { _paq.push(['trackPageView', 'nav/'+i]); } catch(e) {}	
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