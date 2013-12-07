// Libraries
var debounce 	= require("debounce"),
	uGravity 	= require("ugravity");

// interfaces
var Navigation	= require("./navigation/index"),
	SaveDialog  = require("./saveDialog/index"),
	EditDialog 	= require("./editDialog/index"),
	TimeDialog 	= require("./timeDialog/index");

// Package information
var package_json = JSON.parse(require("fs").readFileSync(__dirname + "/../../package.json").toString());

module.exports = function(window, document, router, onLoad) {
	
	// Lets make our instances.
	var navigation = new Navigation(window, document, router),
		saveDialog = new SaveDialog(window, document, router),
		editDialog = new EditDialog(window, document, router),
		timeDialog = new TimeDialog(window, document, router);


	/**
	*
	* Lets create the canvas with the simulation and make sure it always fits to the screen, even when resized.
	*
	**/
	// This variable contains the settings for the simulation without any simulation applied, so we can reset our simulation with these settings.
	this._settings = {objects: []};
	this.changeSettings = function(new_settings) {
		this._settings = new_settings;
		
		// Lets update our navigation dropdown
		navigation.objectDropdown.update(this._settings.objects);
		
		// Lets let ugravity simulation know.
		this.uGravity.load(this._settings);
		
		// lets save it in local storage in case for a page reload.
		localStorage["ugravity-last-project"] = JSON.stringify(this._settings);
		
		this.uGravity.normalize();
	}
	
	
	/**
	*
	* Lets create the canvas with the simulation and make sure it always fits to the screen, even when resized.
	*
	**/
	this.createCanvasToFitScreen = function() {
		var height = window.innerHeight,
			width  = window.innerWidth;

		// If our canvas exists, lets kill it.
		if(this.canvas) {
			this.canvas.parentNode.removeChild(element);
			this.canvas = null;
		}
		
		// Create our canvas and add it to the screen
		this.canvas = document.createElement("canvas");
		this.canvas.id = "main-canvas";
		document.body.appendChild(this.canvas);
	
		// This makes our canvas retina ready
		this.canvas.width 	= width*2;
		this.canvas.height 	= height*2;
		
		// Lets make it fit the screen but not cover the top menu
		this.canvas.style.width  	= width+"px";
		this.canvas.style.height 	= (height-50)+"px";
		this.canvas.style.height 	= (height-50)+"px";
		this.canvas.style.top 		= "50px";
		this.canvas.style.left		= "0px";
		
		// apply uGravity simulator to the canvas.
		if(this.canvas.getContext && this.canvas.getContext('2d')) {
			this.uGravity = new uGravity(this.canvas, this._settings);
		}		
	};
	
	this.reset 		= function() { this.uGravity.load(this._settings); }
	this.stop 		= function() { this.uGravity.stop(); }
	this.start 		= function() { this.uGravity.start(); }
	this.normalize 	= function() { this.uGravity.normalize(); }

	this.changeSpeed = function() {
		timeDialog.open(this.uGravity.export().timeScale, function(timeScale) {
			// Lets append our settings.
			this._settings.timeScale = timeScale;
			localStorage["ugravity-last-project"] = JSON.stringify(this._settings);
			
			navigation.updateTimeScale(timeScale);
			this.uGravity.load({timeScale: timeScale});

		}.bind(this));
	}
	
	this.saveProject 	= function() { saveDialog.open(this._settings); }
	this.newProject 	= function() { this.changeSettings({objects: []}); }

	this.newObject = function() {
		editDialog.open(this._settings, null, function(object) {
			if(!this._settings.objects) this._settings.objects = [];
			this._settings.objects.push(object);
			this.changeSettings(this._settings);
		}.bind(this));
	}
	
	this.editObject = function(objectid) {
		// Lets find the object
		var editObject = this._settings.objects.filter(function(o) { return o.id == objectid; })[0];

		// lets remove it from the settings...
		this._settings.objects = this._settings.objects.filter(function(object) { return editObject != object; });
		this.changeSettings(this._settings);

		// Lets open the dialog
		editDialog.open(this._settings, editObject, function(object) {
			this._settings.objects.push(object);
			this.changeSettings(this._settings);			
		}.bind(this));
	}
	
	
	
	/**
	*
	* Our main init method
	*
	**/
	this.init = function() {
		
	
		/**
		*
		* Lets set a title and keyword description.
		*
		**/
		var title = document.createElement("title");
		title.innerHTML = "uGravity | Universal Gravity Simulator";
		document.head.appendChild(title);
	
		var meta_description = document.createElement("meta");
		meta_description.setAttribute("name", "description");
		meta_description.setAttribute("content", package_json.description);
		document.head.appendChild(meta_description);
		
		/**
		*
		* Lets create the canvas with the simulation and make sure it always fits to the screen, even when resized.
		*
		**/
		this._windowListener = debounce(this.createCanvasToFitScreen.bind(this), 100);
		window.addEventListener('resize', this._windowListener, false);
		this.createCanvasToFitScreen();
		
		
		/**
		*
		* Lets see if some settings were passed in or exist from a previous project
		*
		**/
		if(window.location.href.match("project/")) {
			
			// Lets decode the settings from the URL
			try { this.changeSettings(JSON.parse(decodeURI(window.location.href.match(/project\/(.+)$/)[1]))); } catch(e) {}
			router.update("/", {replace: true});
				
		} else {
			if(window.localStorage && localStorage["ugravity-last-project"]) {
				// Lets grab these settings from local storage.
				try { this.changeSettings(JSON.parse(localStorage["ugravity-last-project"])); } catch(e) {}
			}
		}
		
		// Lets make sure we show the correct time Scale at the top of the screen.
		if(this.uGravity) {
			console.log(this._settings);
			navigation.updateTimeScale(this.uGravity.export().timeScale);
		}
		
		/**
		*
		* Lets handle interactions with our navigation
		*
		**/
		navigation.on("reset", 		this.reset.bind(this));
		navigation.on("stop", 		this.stop.bind(this));
		navigation.on("start", 		this.start.bind(this));
		navigation.on("normalize", 	this.normalize.bind(this));
		navigation.on("time", 		this.changeSpeed.bind(this));
		navigation.on("save", 		this.saveProject.bind(this));
		navigation.on("new", 		this.newProject.bind(this));
		navigation.on("newobject", 	this.newObject.bind(this));
		navigation.on("editobject", this.editObject.bind(this));
		
	}
	
	this.init();
	
	onLoad();
};