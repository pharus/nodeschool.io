/*jslint
    node: true
*/
(function () {
    'use strict';
    
    var filename = process.argv[2],
        fs = require('fs');
    
    fs.readFile(filename, 'utf8', function (err, data) {
        /* I hope, and am considering no errors */
        console.log(data.split('\n').length - 1);
    });
}());