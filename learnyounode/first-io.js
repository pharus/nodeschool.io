/*jslint
    node: true
*/
(function () {
    'use strict';
    
    var filename = process.argv[2],
        fs = require('fs');
    
    console.log(fs.readFileSync(filename, 'utf8').split('\n').length - 1);
}());