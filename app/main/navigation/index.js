var html = require('fs').readFileSync(__dirname + '/template.html', 'utf-8').toString(),
	extend = require("../extend"),
	ObjectDropdown = require("./objectDropdown/index"),
	div;

module.exports = function(window, document) {
	
	extend(this, require("../eventEmitter.js"));

	this.navButtons = ["normalize", "time", "start", "stop", "reset", "save", "new"];
	
	this.navClick = function(i) {

		// Lets toggle Start/Pause button
		if(i == "stop") {
			div.querySelector(".nav li.start").style.display = "block";
			div.querySelector(".nav li.stop").style.display = "none";
		} else if(i == "start") {
			div.querySelector(".nav li.start").style.display = "none";
			div.querySelector(".nav li.stop").style.display = "block";
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