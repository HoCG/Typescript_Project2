"use strict";
var generic = /** @class */ (function () {
    function generic(person) {
        this.person = person;
    }
    generic.prototype.getPerson = function () {
        return this.person;
    };
    ;
    generic.prototype.setPerson = function (person) {
        this.person = person;
    };
    ;
    return generic;
}());
