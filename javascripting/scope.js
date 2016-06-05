/*jslint
    node: true
*/
(function () {
    'use strict';
    
    var a = 1,
        b = 2,
        c = 3;
    
    (function () {
        var b = 5,
            c = 6;
        (function () {
            var b = 8;
            
            /* b to 8, so from now on, and then c = 6, so stop here :P */
            console.log('a: ' + a + ', b: ' + b + ', c: ' + c);
            
            (function () {
                var a = 7,
                    c = 9;
                
                (function () {
                    var a = 1,
                        c = 8;
                }());
            }());
        }());
    }());
}());