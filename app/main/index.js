// var ObjectList = ,
// 	template = require('micro-template').template;
// 	
// template.get = function (id) { return require('fs').readFileSync(id + '.html', 'utf-8').toString() };

var Navigation	= require("./navigation/index"),
	Canvas 		= require("./canvas/index.js"),
	ObjectList 	= require("./object-list/index.js"),
	SaveDialog  = require("./saveDialog/index"),
	EditDialog 	= require("./editObject/index");

module.exports = function(window, document, router, onLoad) {
	
	var settings,
		empty = {objects: []},
		changeSettings = function(new_settings) {
			settings = new_settings;
			
			// Lets update our navigation pulldown
			navigation.updateObjects(settings.objects);
			
			// Lets let ugravity simulation know.
			canvas.update(settings);
			
			// lets save it in local storage in case for a page reload.
			localStorage["ugravity-last-project"] = JSON.stringify(settings);
			
			canvas.normalize();
			
		};
	
	if(window.location.href.match("project/")) {
		try {
			settings = JSON.parse(decodeURI(window.location.href.match(/project\/(.+)$/)[1]));
			localStorage["ugravity-last-project"] = JSON.stringify(settings);
			router.update("/", {replace: true});
		} catch(e) {}
				
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
	
//	canvas.normalize();
	
	navigation.on("save", function() {
		saveDialog.open(settings);
	});
	
	navigation.on("new", function() {
		canvas.update(empty);
		changeSettings(empty);
		localStorage["ugravity-last-project"] = JSON.stringify(empty);
	});
	
	navigation.on("newobject", function() {
		var dialog = new EditDialog(window, document, router);
		
		dialog.open(settings);
		
		dialog.on("save", function(object) {
			settings.objects.push(object);
			changeSettings(settings);
		});
		
	});
	
	navigation.on("editobject", function(objectid) {
		
		
		
		var dialog = new EditDialog(window, document, router),
			editObject = settings.objects.filter(function(o) {
				return o.id == objectid;
			})[0];
		
		// lets remove it from the settings...
		settings.objects = settings.objects.filter(function(object) {
			return objectid != object.id;
		});
		
		changeSettings(settings);
		
		dialog.open(settings, editObject);
		
		dialog.on("save", function(object) {
			settings.objects.push(object);
			changeSettings(settings);
		});
		
	});
	
	onLoad();
};