/*jslint
    node: true
*/
(function () {
    'use strict';
    
    var pets = ['cat', 'dog', 'rat'];
    
    pets = pets.map(function (pet) {
        return pet + 's';
    });
    
    console.log(pets);
}());