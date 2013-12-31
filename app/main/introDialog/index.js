var html 				= require('fs').readFileSync(__dirname + '/template.html', 'utf-8').toString(),
	not_supported_html 	= require('fs').readFileSync(__dirname + '/support.html', 'utf-8').toString();

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