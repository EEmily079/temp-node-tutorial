// Modules
//commonJS, every file is modules (by default)
// Modules = Encapsulated Code (only share minimum)

//call other modules export
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require ('./6-alternative-flavour')
require('./7-mind-grenade')

console.log(data)
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);



