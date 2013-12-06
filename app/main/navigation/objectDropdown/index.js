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