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
	
	
	var seconds_in_a_day = 86400;
	
	this.open = function(timeScale, callback) {

		div.querySelector("input").value = timeScale/seconds_in_a_day;

		this._modalContentListener = function(e) {
			
			callback(Number(div.querySelector("input").value)*seconds_in_a_day);
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