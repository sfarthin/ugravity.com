module.exports = function(document, element) {

	var dropdown_ul = document.createElement("ul");
	dropdown_ul.className = "dropdown-menu objects";
	element.appendChild(dropdown_ul);
	
	return {
		listeners: {},
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
		update: function(objects) {
			var html = [], j = 0;
	
			for(var i in objects) {
				html[j++] = "<li><a><span style='background-color:"+objects[i].color+";'></span>" + objects[i].name.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + "</a></li>"
			}
	
			html[j++] = '<li class="divider"></li><li class="add"><a>Add Another Object</a></li>';
	
			// Lets remove any existing listeners.
			try { dropdown_ul.querySelector("li.add").removeEventListener("click", this._addListener, false); } catch(e) {}
	
			dropdown_ul.innerHTML = html.join("");
			
			this._addListener = function() { this.trigger("newobject") }.bind(this);
			dropdown_ul.querySelector("li.add").addEventListener("click", this._addListener, false);
			
		}
	}
}