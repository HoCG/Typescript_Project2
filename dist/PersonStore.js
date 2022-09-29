"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonStore = /** @class */ (function () {
    function PersonStore(personArray) {
        this.personArray = personArray;
        this.key = 1;
        this.personArray = personArray;
    }
    PersonStore.prototype.pushPerson = function (Person) {
        this.personArray.set(this.key, Person);
        this.keyUp();
    };
    PersonStore.prototype.keyUp = function () {
        this.key++;
    };
    PersonStore.prototype.getPerson = function (key) {
        return this.personArray.get(key);
    };
    return PersonStore;
}());
exports.default = PersonStore;
