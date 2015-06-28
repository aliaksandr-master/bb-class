'use strict';

var extend = require('./extend');

var Class = function () {
	this.initialize.apply(this, arguments);
};

Class.prototype = {
	initialize: function () {
	}
};

Class.extend = extend;

module.exports = Class;
