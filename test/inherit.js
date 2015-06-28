'use strict';

var inherit = require('./_lib/index').utils.inherit;

exports['test extends'] = function (test) {
	var F = function () {};

	inherit(F, Error);

	var f = new F();

	test.ok(f instanceof Error);
	test.ok(f instanceof F);
	test.done();
};
