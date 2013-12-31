module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		less: {
			app_css: {
				options: {
					ieCompat: false,
					paths: ["less", "bower_components/bootstrap/less"],
					yuicompress: true
				},
				files: {
					"public/app.css": ["less/main.less"]
				}
			},
		},
		uglify: {
			app_js: {
				files: {
					'public/app.js': ['public/app.js']
				}
			}
		},
		copy: {
			bootstrap_fonts: {
				files: [
					// includes files within path
					{expand: true, cwd: 'bower_components/bootstrap/fonts/', src: ['**'], dest: 'public/fonts/', filter: 'isFile'},
				]
			}
		},
		watch: {
			app_css: {
				files: ["less/*.less"],
				tasks: ['less:app_css'],
				options: {
					event: ['changed']
				},
			},
			build: {
				files: ["app/**/*", "/Users/sfarthing/Sites/gravity/uGravity.js"],
				tasks: ['build'],
				options: {
					event: ['changed']
				},
			},
		},
	});
	
	grunt.registerTask('build', 'Build static pages and JS files.', function() {
		
		var done = this.async();
		
		var jsdom 		= require("jsdom"),
			fs 			= require("fs"),
			browserify 	= require('browserify'),
			step 		= require('step');
			
		jsdom.env('<!DOCTYPE html><html lang="en"><head></head><body></body></html>', function (errors, window) {
			
			window.jsdom = true;
			
			var routes = require("./app/router.js")(window, window.document);
			
			step(function() {
			
				var self = this;
			
				// Lets browsify our code
				var b = browserify();
				b.add("./app/router.js").transform('brfs').bundle(self.parallel());
			
				// Lets make a static HTML page.
				// @todo do each static file
				routes[0].exec(self.parallel());
			
			}, function(err, app_src, html_src) {
				
				if(err) {
					console.log(err.stack);
					throw err;
				}
			
				// Grab Javascript and write file
				fs.writeFile("public/app.js", app_src, this.parallel());
		
				// Grab HTML and write file.
				window.document.head.innerHTML += "<link rel=\"stylesheet\" href=\"/app.css\">";
				window.document.body.innerHTML += "<script src='/app.js'></script>";
				
				// Analytics
				if(fs.existsSync(__dirname + "/analytics.html")) {
					window.document.body.innerHTML += fs.readFileSync(__dirname + "/analytics.html");
				}
				
				var html = window.document.innerHTML;
				window.close();

				fs.writeFile("public/index.html", html, this.parallel());
			
			
			}, done);
		});
		
	});
	
	grunt.registerTask('develop', 'Build static pages and JS files.', function() {
		
		var done 	= this.async(),
			express = require('express'),
			app 	= express();
		
		var jsdom 		= require("jsdom");
		
//		'<!DOCTYPE html><html lang="en"><head></head><body></body></html>'
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['copy:bootstrap_fonts', 'less', 'uglify', 'build']);

};