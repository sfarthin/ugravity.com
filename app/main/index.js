// var ObjectList = ,
// 	template = require('micro-template').template;
// 	
// template.get = function (id) { return require('fs').readFileSync(id + '.html', 'utf-8').toString() };

var Navigation	= require("./navigation/index"),
	Canvas 		= require("./canvas/index.js"),
	ObjectList 	= require("./object-list/index.js"),
	SaveDialog  = require("./saveDialog/index"),
	editObject 	= require("./editObject/index");

module.exports = function(window, document, router, onLoad) {
	
	var settings,
		empty = {objects: []};
	
	if(window.location.href.match("project/")) {
		try {
			settings = JSON.parse(decodeURI(window.location.href.match(/project\/(.+)$/)[1]));
			localStorage["ugravity-last-project"] = JSON.stringify(settings);
			router.update("/", {replace: true});
		} catch(e) {
			//settings = {"autoStart": false, "title":"Kepler 16","scale":1636,"view":[0,0],"units":{"distance":"AU","time":"days"},"graphpaper":{"cellsAccross":10},"print":["Kepler-16A.mass"],"objects":[{"name":"Kepler-16A","label":"A","radius":0.00301680099,"mass":6.897e+29,"y":0,"velocityX":0,"velocityY":0.1158841966653838,"color":"#0000FF","x":-0.05184430229437002},{"name":"Kepler-16B","label":"B","radius":0.001051765893,"mass":2.0255e+29,"y":0,"color":"#FF0000","x":0.17653426458862997,"velocityX":0,"velocityY":-0.39459555882555025}],"breakpoints":[]};
		}
				
	} else {
		if(window.localStorage && localStorage["ugravity-last-project"]) {
			settings = JSON.parse(localStorage["ugravity-last-project"]);
		}
	}
	
	// Lets assign ids if there are none.
	if(settings && settings.objects) {
		for(var i in settings.objects) {
			if(!settings.objects[i].id)
				settings.objects[i].id = i;
		}
	}
	
	
	if(!settings)
		settings = empty;
	
	
	var navigation = new Navigation(window, document),
		canvas 	   = new Canvas(	window, document, router, navigation, settings),
		objectList = new ObjectList(window, document),
		saveDialog = new SaveDialog(window, document, router);
	
	navigation.add();
	canvas.add();
	
	navigation.on("save", function() {
		saveDialog.open(settings);
	});
	
	navigation.on("new", function() {
		canvas.update(empty);
		localStorage["ugravity-last-project"] = JSON.stringify(empty);
	});
	
	navigation.on("newobject", function() {
		var dialog = new editObject(window, document, router);
		
		dialog.open(settings);
		
		dialog.on("save", function(object) {
			console.log(settings.objects[0], object);
			settings.objects.push(object);
			canvas.update(settings);
			localStorage["ugravity-last-project"] = JSON.stringify(empty);
			console.log("save");
		});
		
	});
	
	navigation.on("editobject", function(editObject) {
		var dialog = new editObject(window, document, router);
		
		// lets remove it from the settings...
		settings.objects = settings.objects.filter(function() {
			return editObject != object;
		});
		
		dialog.open(settings, editObject);
		
		dialog.on("save", function(object) {
			settings.objects.push(object);
			canvas.update(settings);
			localStorage["ugravity-last-project"] = JSON.stringify(empty);
			console.log("save");
		});
		
	});
	
	onLoad();
};