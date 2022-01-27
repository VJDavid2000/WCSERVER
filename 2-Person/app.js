/*David, Vincent Jericho C.
2075 - WCSERVER*/

var myLogModule = require('../Logs/Utility/logs');

myLogModule.info('NodeJS Is Curently Running...')

var person = require('./person.js');
var person1 = new person('Vincent', 'David');

console.log(person1.fullName());