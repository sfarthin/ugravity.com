;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(window, document, router, onLoad) {
	
	document.body.innerHTML = "adsadasdas";
	onLoad();
	
}
},{}],2:[function(require,module,exports){
var debounce = require("debounce"),
	element;

module.exports = function(window, document) {
	
	return {
		add: function() {
			
			if(!element) {

				element_in_dom = document.getElementById("main-canvas");

				if(element_in_dom) {
					element = element_in_dom;
				} else {
					element = document.createElement("canvas");
				}

				element.id = "main-canvas";
				
				if(!element_in_dom)
					document.body.appendChild(element);
			}
			
			// Add window listener
			this._windowListener = debounce(this.fitCanvasToScreen, 300);
			window.addEventListener('resize', this._windowListener, false);
			
			this.fitCanvasToScreen();
			
		},
		
		fitCanvasToScreen: function() {
			var height = window.innerHeight,
				width  = window.innerWidth;
		
			// This makes our canvas retina ready
			element.width 	= width*2;
			element.height 	= height*2;
		
			element.style.width  	= width+"px";
			element.style.height 	= (height-50)+"px";
			element.style.height 	= (height-50)+"px";
			element.style.top 		= "50px";
			element.style.left		= "0px";
			
		},
		
		remove: function() {
			
			document.body.removeChild(element);
			
			window.removeEventListener('resize', this._windowListener, false);
			
		}
		
	};
	
	//$(document.body).append(canvas);
	
	// var fitCanvasToScreen = _.debounce(function() {
	// 	var height = $(window).height(),
	// 		width  = $(window).width();
	// 
	// 	$(canvas).css({
	// 		top: 50,
	// 		left: 0,
	// 		height: height - 50,
	// 		width: width
	// 	});
	// 
	// }, 300);
	// 
	// $(window).bind("resize", fitCanvasToScreen);
	// fitCanvasToScreen();
	// 
	// return {
	// 	remove: function() {
	// 		$(window).unbind("resize", fitCanvasToScreen);
	// 		$(canvas).remove();
	// 	}
	// }	
}
},{"debounce":8}],3:[function(require,module,exports){
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
},{"./canvas/index.js":2,"./navigation/index":4,"./object-list/index.js":5}],4:[function(require,module,exports){
var html = "<!-- <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\"> -->\n\t<div class=\"container-fluid\">\n\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t<li class=\"dropdown\">\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Objects <b class=\"caret\"></b></a>\n\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t<li><a href=\"#\">Kepler16-A</a></li>\n\t\t\t\t\t<li><a href=\"#\">Kepler16-B</a></li>\n\t\t\t\t\t<li><a href=\"#\">Kepler16-b</a></li>\n\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t<!-- <li class=\"dropdown-header\">Nav header</li> -->\n\t\t\t\t\t<li><a href=\"#\">Add Another Object</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t\t\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" href=\"/\">uGravity</a>\n\t\t</div>\n\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a href=\"/new\"><span class=\"glyphicon glyphicon-flash\"></span> New Project</a></li>\n\t\t\t\t<li><a href=\"/save\"><span class=\"glyphicon glyphicon-floppy-save\"></span> Save Project</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n<!-- </div> -->".toString(),
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
},{}],5:[function(require,module,exports){
var html = "<div class=\"panel-heading\">Objects</div>\n<div class=\"list-group\">\n\t<a href=\"#\" class=\"list-group-item\">\n\t\tKepler16-A\n\t\t<!-- <h4 class=\"list-group-item-heading\">List group item heading</h4>\n\t\t<p class=\"list-group-item-text\">...</p> -->\n\t</a>\n\t<a href=\"#\" class=\"list-group-item\"><!-- active -->\n\t\tKepler16-B\n\t\t<!-- <h4 class=\"list-group-item-heading\">List group item heading</h4>\n\t\t<p class=\"list-group-item-text\">...</p> -->\n\t</a>\n\t<a href=\"#\" class=\"list-group-item\">\n\t\tKepler16-b\n\t\t<!-- <h4 class=\"list-group-item-heading\">List group item heading</h4>\n\t\t<p class=\"list-group-item-text\">...</p> -->\n\t</a>\n</div>",
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
},{}],6:[function(require,module,exports){
var LocationBar = require('location-bar'),
	router = new LocationBar,
	routes = require("./routes");

module.exports = function(window, document) {
	
	// Lets setup our router to handle all the routes defined in routes.js
	routes.forEach(function(route, i) {
		
		// This handles pushState stuff
		router.route(route.regex, function () {
			// only called when the current url matches the regex
			route.app.apply(this, [window, document, router, function(){} ]);
		});

		// API for nodejs
		routes[i].exec = function(onLoad) {
			router.update(route.path, {trigger: false});
			route.app.apply(this, [window, document, router, onLoad]);
		}				
		
	});
	
	return routes;
}

// If window is already defined, we must be in the browser. In this case, lets run this thing
if(typeof window != "undefined") {
	module.exports(window,document);
	router.start({pushState: true});
}
},{"./routes":7,"location-bar":9}],7:[function(require,module,exports){
module.exports = [
	{
		path: "",
		regex: /^$/,
		files: ["index.html"],
		app: require("./main/index.js")
	},
	{
		path: "/about",
		regex: /^about$/,
		files: ["about.html"],
		app: require("./about.js")
	}
];
},{"./about.js":1,"./main/index.js":3}],8:[function(require,module,exports){
/**
 * Debounces a function by the given threshold.
 *
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, threshold, execAsap){
  var timeout;

  return function debounced(){
    var obj = this, args = arguments;

    function delayed () {
      if (!execAsap) {
        func.apply(obj, args);
      }
      timeout = null;
    }

    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      func.apply(obj, args);
    }

    timeout = setTimeout(delayed, threshold || 100);
  };
};

},{}],9:[function(require,module,exports){
// LocationBar module extracted from Backbone.js 1.0.0
// (actually it's commit f6fa0cb87e26bb3d1b7f47144fd720d1ab48e88f)
//
// the dependency on backbone, underscore and jquery have been removed to turn
// this into a small standalone library for handling browser's history API
// cross browser and with a fallback to hashchange events or polling.

(function(define) {
define(function() {

  // 3 helper functions we use to avoid pulling in entire _ and $
  function extend(obj, source) {
    for (var prop in source) {
      obj[prop] = source[prop];
    }
    return obj;
  }
  function on(obj, type, fn) {
    if (obj.attachEvent) {
      obj['e'+type+fn] = fn;
      obj[type+fn] = function(){ obj['e'+type+fn]( window.event ); };
      obj.attachEvent( 'on'+type, obj[type+fn] );
    } else {
      obj.addEventListener( type, fn, false );
    }
  }
  function off(obj, type, fn) {
    if (obj.detachEvent) {
      obj.detachEvent('on'+type, obj[type+fn]);
      obj[type+fn] = null;
    } else {
      obj.removeEventListener(type, fn, false);
    }
  }





  // this is mostly original code with minor modifications, mostyle to avoid
  // dependency on 3rd party libraries + renaming Backbone.History -> LocationBar
  //
  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var LocationBar = function() {
    this.handlers = [];

    // MODIFICATION OF ORIGINAL BACKBONE.HISTORY
    //
    // _.bindAll(this, 'checkUrl');
    //
    var self = this;
    var checkUrl = this.checkUrl;
    this.checkUrl = function () {
      checkUrl.apply(self, arguments);
    };

    // Ensure that `LocationBar` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash and query.
  var pathStripper = /[?#].*$/;

  // Has the history handling already been started?
  LocationBar.started = false;

  // Set up all inheritable **LocationBar** properties and methods.
  extend(LocationBar.prototype, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (LocationBar.started) throw new Error("LocationBar has already been started");
      LocationBar.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = extend({root: '/'}, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        // MODIFICATION OF ORIGINAL BACKBONE.HISTORY
        //
        // this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        //
        this.iframe = document.createElement("iframe");
        this.iframe.setAttribute("src", "javascript:0");
        this.iframe.setAttribute("tabindex", -1);
        this.iframe.style.display = "none";
        document.body.appendChild(this.iframe);
        this.iframe = this.iframe.contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        on(window, 'popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        on(window, 'hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !atRoot) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + this.location.search + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && atRoot && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      off(window, 'popstate', this.checkUrl);
      off(window, 'hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      LocationBar.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function() {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // MODIFICATION OF ORIGINAL BACKBONE.HISTORY
      //
      // return _.any(this.handlers, function(handler) {
      //   if (handler.route.test(fragment)) {
      //     handler.callback(fragment);
      //     return true;
      //   }
      // });
      //
      fragment = this.fragment = this.getFragment(fragment);
      for (var i = 0, l = this.handlers.length; i < l; i++) {
        var handler = this.handlers[i];
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      }
      return false;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!LocationBar.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the fragment of the query and hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });



  // add some features to LocationBar

  // a more intuitive alias for navigate
  LocationBar.prototype.update = function () {
    this.navigate.apply(this, arguments);
  };

  // a generic callback for any changes
  LocationBar.prototype.onChange = function (callback) {
    this.route(/^(.*?)$/, callback);
  };

  // checks if the browser has pushstate support
  LocationBar.prototype.hasPushState = function () {
    if (!LocationBar.started) {
      throw new Error("only available after locationBar.start()");
    }
    return this._hasPushState;
  };






  // export
  return LocationBar;
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });
},{}]},{},[6])
;