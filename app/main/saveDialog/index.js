var html = require('fs').readFileSync(__dirname + '/template.html', 'utf-8').toString();

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

			
			this._closeListener = function() { console.log(1); this.close(); }.bind(this);			
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