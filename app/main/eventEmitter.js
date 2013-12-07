var Emitter = {};

Emitter.on = function(msg, func, context) {
	
	if(!this._listeners) this._listeners = {}
	
	if(!this._listeners[msg])
		this._listeners[msg] = [];
		
	this._listeners[msg].push({func: func, context: context});
	
};

Emitter.trigger = function(msg) {
	
	if(!this._listeners) this._listeners = {}
	
	if(this._listeners[msg]) {
		for(var i in this._listeners[msg]) {
			var func 	= this._listeners[msg][i].func,
				context	= this._listeners[msg][i].context;
			
			func.apply((context ? context : this), [].slice.call(arguments, 1));
		}
	}	
};

module.exports = Emitter;