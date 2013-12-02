var html = require("fs").readFileSync(__dirname + "/template.html"),
	div;

module.exports = function(window, document) {
	
	// var $ 		 = window.$,
	// 	document = window.document,
	// 	element  = $(html);
		
	//$(document.body).append(element);
	
	return {
		add: function() {
			
			if(!div) {

				div_in_dom = document.getElementById("main-list");

				if(div_in_dom) {
					div = div_in_dom;
				} else {
					div = document.createElement("div");
				}
		
				div.innerHTML = html;
				div.id = "main-list";
				div.className = 'panel panel-primary';
				div.setAttribute("role", "list");	
				
				if(!div_in_dom)
					document.body.appendChild(div);
			}
			
		},
		remove: function() {
			div.remove();
		}
	}	
}