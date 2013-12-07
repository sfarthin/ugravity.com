var html = require('fs').readFileSync(__dirname + '/template.html', 'utf-8').toString();

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
	
	this.open = function(timeScale, callback) {
		
		console.log(arguments);

		div.querySelector("input").value = timeScale;

		this._modalContentListener = function(e) {
			callback(Number(div.querySelector("input").value));
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