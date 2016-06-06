/*jslint
    node: true
*/
(function () {
    'use strict';
    
    var numbers = process.argv.slice(2).map(Number),
        total = numbers.reduce(function (p, c) {
            return p + c;
        });
    
    console.log(total);
}());