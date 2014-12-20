// Libraries
var debounce 	= require("debounce"),
	uGravity 	= require("ugravity"); //require("../../../gravity/uGravity.js"); //

// interfaces
var Navigation	= require("./navigation/index"),
	SaveDialog  = require("./saveDialog/index"),
	EditDialog 	= require("./editDialog/index"),
	IntroDialog = require("./introDialog/index"),
	TimeDialog 	= require("./timeDialog/index");

var processingHTML = require('fs').readFileSync(__dirname + '/processingDialog.html', 'utf-8').toString();

// Package information
var package_json = JSON.parse(require("fs").readFileSync(__dirname + "/../../package.json").toString());

module.exports = function(window, document, router, onLoad) {
	
	// Lets make our instances.
	var navigation = new Navigation(window, document, router),
		saveDialog = new SaveDialog(window, document, router),
		introDialog = new IntroDialog(window, document, router),
		editDialog = new EditDialog(window, document, router),
		timeDialog = new TimeDialog(window, document, router);

	introDialog.open();


	/**
	*
	* Lets create the canvas with the simulation and make sure it always fits to the screen, even when resized.
	*
	**/
	// This variable contains the settings for the simulation without any simulation applied, so we can reset our simulation with these settings.
	this._settings = {objects: [], elapsedTime: 0};
	this.changeSettings = function(new_settings) {
		this._settings = new_settings;
		
		this._settings.elapsedTime = 0;
		
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
			this.canvas.parentNode.removeChild(this.canvas);
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
	this.start 		= function() { 
		if(!this.uGravity.isRunning()) {
			this.uGravity.start(); 	
		}
	}
	this.capture 	= function() {
		
		var confirm_t = confirm("This feature is very experimental and may take up to a minute to produce 5 seconds video. As of 2/1/14, Google Chrome is the only browser that supports this feature. After the capture is complete you can right-click (or CTRL click) and \"Save Video As...\" to save it to your computer in the WebM format. \n\n Are you sure you want to proceed?");
		// 
		// time = Number(time);
		// 
		// if(time > 10) time = time;
		
		if(confirm_t) {
			
			// Lets add HTML
			var pDiv = document.createElement("div");
			pDiv.innerHTML = processingHTML;
			pDiv.style.display = "block";
			pDiv.className = "modal fade In";
			
			var background = document.createElement("div");
			background.className = "modal-backdrop fade in";
			
			document.body.appendChild(pDiv);
			document.body.appendChild(background);
			
			// Lets capture video
			this.encoder = new Whammy.Video(15); 
		
			var original_fps = this.uGravity.fps;
			this.uGravity.fps = 5;
		
			// Setup a hook to capture information rather than print to screen.
			this.uGravity.onRender = function(canvas) {
				this.encoder.add(canvas); 
			}.bind(this);
		
			// Lets start our simulation
			this.uGravity.start();
		
			// Lets stop it in so many seconds
			setTimeout(function() {
			
				this.uGravity.stop();
			
				this.reset();
			
				this.uGravity.fps = original_fps;
		
				var output 	= this.encoder.compile(),
					url 	= (window.webkitURL || window.URL).createObjectURL(output); 
		
				var video = document.createElement("video"),
					body = pDiv.querySelector(".modal-body");

				video.src = url;
				video.style.width="100%";
				video.setAttribute("controls", "controls");
				video.setAttribute("autoplay", "autoplay");
				body.innerHTML = '';
				body.appendChild(video);
				
				var link = document.createElement("a");
				link.innerHTML = "Download Video";
				link.addEventListener("click", function() {
					window.open(url);
				});
				body.appendChild(link);
				
				pDiv.querySelector(".modal-footer").innerHTML = '<button type="button" class="btn save btn-primary" data-dismiss="modal">OK</button>';
			
				pDiv.querySelector(".modal-footer button").addEventListener("click", function() {
					document.body.removeChild(pDiv);
					document.body.removeChild(background);
				});
			
				this.uGravity.onRender = null;
				
				// removign processing message.
				
				this.uGravity.render();
			
			}.bind(this), 10000);
		
		}
		// 	
		// } else {
		// 	alert("Invalid number of seconds given, please enter a number between 1 and 10.");
		// }

	}.bind(this);
	
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
	this.newProject 	= function() { this.changeSettings({objects: [], elapsedTime: 0}); }

	this.newObject = function() {
		editDialog.open(this._settings, null, function(object) {
			if(!this._settings.objects) this._settings.objects = [];
			if(object) this._settings.objects.push(object);
			this.changeSettings(this._settings);
		}.bind(this));
	}
	
	this.editObject = function(objectid) {
		// Lets find the object
		var editObject = this._settings.objects.filter(function(o) { return o.id == objectid; })[0];

		// Lets open the dialog
		editDialog.open(this._settings, editObject, function(object) {
			
			// lets remove it from the settings...
			this._settings.objects = this._settings.objects.filter(function(object) { return editObject != object; });
			
			// add it fresh.
			if(object) this._settings.objects.push(object);

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
		navigation.on("capture", 	this.capture.bind(this));
		navigation.on("normalize", 	this.normalize.bind(this));
		navigation.on("time", 		this.changeSpeed.bind(this));
		navigation.on("save", 		this.saveProject.bind(this));
		navigation.on("new", 		this.newProject.bind(this));
		navigation.on("newobject", 	this.newObject.bind(this));
		navigation.on("editobject", this.editObject.bind(this));
		
		navigation.on("sun-earth-moon", function() {
			this.changeSettings({"objects":[{"id":"1386822433769-92","name":"Sun","color":"#FF0000","mass":1.9887421338e+30,"radius":0.004654692513368984,"y":1.8614179595657845e-22,"x":-0.0000030400266236668134,"velocityX":0,"velocityY":0,"earth_mass":"333000","radius_in_km":"696342","relative_object":"","relative_object_distance":"","relative_object_direction":"0","velocity_in_km":"","velocity_direction":"0","scaledX":1294.9962856454129,"scaledY":520,"scaledRadius":5.687179959060245},{"id":"1386822450577-96","name":"Earth","color":"#0000FF","mass":5.9721986e+24,"radius":0.000042586898395721926,"y":-6.123013154932292e-17,"x":0.9999969599733763,"velocityX":2.4393896620258584e-23,"velocityY":1.9919786096256684e-7,"earth_mass":"1","radius_in_km":"6371","relative_object":"1386822433769-92","relative_object_distance":"1","relative_object_direction":"90","velocity_in_km":"29.8","velocity_direction":"180","scaledX":2516.8127520877824,"scaledY":519.9999999999999,"scaledRadius":0.05203337371460119},{"id":"1386823517240-54","name":"Moon","color":"#FFFF00","mass":7.345804278e+22,"radius":0.000011614304812834225,"y":-6.138914668436675e-17,"x":1.0025939599733764,"velocityX":2.4393896620258584e-23,"velocityY":1.9237967914438503e-7,"earth_mass":"0.0123","radius_in_km":"1737.5","relative_object":"1386822450577-96","relative_object_distance":"0.002597","relative_object_direction":"90","velocity_in_km":"1.02","velocity_direction":"0","scaledX":2519.9858094511337,"scaledY":519.9999999999999,"scaledRadius":0.014190548866601722}],"elapsedTime":0,"timeScale":86400});
			navigation.updateTimeScale(this.uGravity.export().timeScale);
		}.bind(this));
		
		navigation.on("sun-jupiter", function() {
			this.changeSettings({"objects":[{"id":"1386830027195-84","name":"Sun","color":"#FF0000","mass":1.9887421338e+30,"radius":0.008665387700534759,"y":0.004960093057097376,"x":0,"velocityX":0,"velocityY":0,"earth_mass":"333000","radius_in_km":"1296342","relative_object":"","relative_object_distance":"","relative_object_direction":"0","velocity_in_km":"","velocity_direction":"0","scaledX":1295,"scaledY":851.7209036332954,"scaledRadius":120.05687519541664},{"id":"1386830071079-99","name":"Jupiter","color":"#0000FF","mass":1.898800822884e+27,"radius":0.00046239304812834226,"y":-5.1950399069429025,"x":0,"velocityX":8.731347754916602e-8,"velocityY":-5.34623196905181e-24,"earth_mass":"317.94","radius_in_km":"69174","relative_object":"1386830027195-84","relative_object_distance":"5.2","relative_object_direction":"0","velocity_in_km":"13.062096241355237","velocity_direction":"90","scaledX":1295,"scaledY":-71193.03607563493,"scaledRadius":6.406345150251825}],"elapsedTime":0,"timeScale":103680000});
			navigation.updateTimeScale(this.uGravity.export().timeScale);
		}.bind(this));
		
	}
	
	this.init();
	
	onLoad();
};