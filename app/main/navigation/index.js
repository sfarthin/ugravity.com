var html = require('fs').readFileSync(__dirname + '/template.html', 'utf-8').toString(),
	div;

module.exports = function(window, document) {
	return {
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
			
		},
		remove: function() {
			document.body.removeChild(div);
			div = null;
		}
	};
}