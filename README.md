[![npm](http://img.shields.io/npm/v/bb-class.svg?style=flat-square)](https://www.npmjs.com/package/bb-class)
![npm](http://img.shields.io/npm/l/bb-class.svg?style=flat-square)
[![Dependency Status](https://david-dm.org/aliaksandr-pasynkau/bb-class.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/bb-class)
[![devDependency Status](https://david-dm.org/aliaksandr-pasynkau/bb-class/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/bb-class#info=devDependencies)
[![Build Status](https://travis-ci.org/aliaksandr-pasynkau/bb-class.svg?branch=master&style=flat-square)](https://travis-ci.org/aliaksandr-pasynkau/bb-class)
[![Coverage Status](https://img.shields.io/coveralls/aliaksandr-pasynkau/bb-class.svg?style=flat-square)](https://coveralls.io/r/aliaksandr-pasynkau/bb-class?branch=master)

# bb-class
LightWeight (Backbone like) implementation of class for JS.

## Getting started 

To install `bb-class` from npm, run:
```bash
npm install -g bb-class --save
```

Finally, use the library:
```js
'use strict';

bbClass = require('bb-class');

var MyClass = bbClass.extend(prototypePropsObject, staticPropsObject);
var MyClassChild = MyClass.extend(anotherPrototypePropsObject, anotherStaticPropsObject);

var myClassInstance = new MyClass();
var myClassChildInstance = new MyClassChild();

myClassInstance instanceof myClassInstance; // true

myClassChildInstance instanceof MyClassChild; // true

myClassChildInstance instanceof myClassInstance; // true

// do something helpful
```

#### You can read more examples in `test` directory of this repository

### Enjoy!


## Support
If you have any problems, you cached a bug, or you have any suggestion - please [find an existing issue or create new](https://github.com/aliaksandr-pasynkau/bb-class/issues)


## Contributing
If you want to develop this library do not be shy - Do that! [How to contribute open-source projects](https://guides.github.com/activities/contributing-to-open-source/)

### Run tests bb-class
```shell
$ npm i -g grunt-cli
$ npm test
```
