'use strict';
/*eslint consistent-this: 0*/

var _ = require('lodash');

module.exports = function (protoProps, staticProps) {
	var parent = this;
	var child;

	if (protoProps && _.has(protoProps, 'constructor')) {
		child = protoProps.constructor;
	} else {
		child = function () {
			return parent.apply(this, arguments);
		};
	}

	_.extend(child, parent, staticProps);

	var Sub = function () {
		this.constructor = child;
	};

	Sub.prototype = parent.prototype;
	child.prototype = new Sub();

	if (protoProps) {
		_.extend(child.prototype, protoProps);
	}

	child.__super__ = parent.prototype;

	return child;
};
