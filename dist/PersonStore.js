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
    PersonStore.prototype.deletePerson = function (key) {
    };
    PersonStore.prototype.showAllInfo = function () {
        this.personArray.forEach(function (value, key, map) {
            return console.log(value.getName() + "\n");
        });
    };
    return PersonStore;
}());
exports.default = PersonStore;
