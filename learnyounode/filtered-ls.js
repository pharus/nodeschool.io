/*jslint
    node: true
*/
(function () {
    'use strict';
    
    var directory = process.argv[2],
        ext = '.' + process.argv[3],
        fs = require('fs'),
        path = require('path');
    
    fs.readdir(directory, function (err, files) {
        /* expecting no errors */
        
        files.filter(function (file) {
            return ext === path.extname(file);
        }).forEach(function (file) {
            console.log(file);
        });
    });
}());