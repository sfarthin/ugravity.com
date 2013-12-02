// var ObjectList = ,
// 	template = require('micro-template').template;
// 	
// template.get = function (id) { return require('fs').readFileSync(id + '.html', 'utf-8').toString() };

var Navigation	= require("./navigation/index"),
	Canvas 		= require("./canvas/index.js"),
	ObjectList 	= require("./object-list/index.js");

module.exports = function(window, document, router, onLoad) {
	
	var navigation = new Navigation(window, document),
		canvas 	   = new Canvas(window, document),
		objectList = new ObjectList(window,document);
	
	navigation.add();
	canvas.add();
//	objectList.add();

		
//		document.body.innerHTML = "dasdadasdasdasasddasd";
	
	onLoad();
};