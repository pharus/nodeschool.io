/*jslint
    node: true
*/
(function () {
    'use strict';
    
    var total = 0,
        limit = 10,
        i;
    
    for (i = 0; i < limit; i += 1) {
        total += i;
    }
    
    console.log(total);
}());