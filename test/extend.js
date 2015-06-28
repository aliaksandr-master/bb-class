'use strict';

var Class = require('./_lib/index').Class;

exports['test extends'] = function (test) {
	var Parent = Class.extend();
	var Child = Parent.extend();
	var Some = Class.extend();

	var p = new Parent();
	var c = new Child();
	var s = new Some();

	test.ok(c instanceof Child, 'Child self instanceof');
	test.ok(p instanceof Parent, 'Parent self instanceof');
	test.ok(c instanceof Parent);
	test.ok(c instanceof Parent);
	test.ok(!(p instanceof Child));
	test.ok(!(s instanceof Child));
	test.ok(!(s instanceof Parent));
	test.ok(s instanceof Some);
	test.done();
};
