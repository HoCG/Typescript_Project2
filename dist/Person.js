"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_id, _name, _age) {
        this._id = _id;
        this._name = _name;
        this._age = _age;
        this._id = _id;
        this._name = _name;
        this._age = _age;
    }
    Person.prototype.setId = function (id) {
        this._id = id;
    };
    Person.prototype.getId = function () {
        return this._id;
    };
    Person.prototype.setName = function (name) {
        this._name = name;
    };
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.setAge = function (age) {
        throw new Error("Method not implemented.");
    };
    Person.prototype.getAge = function () {
        throw new Error("Method not implemented.");
    };
    return Person;
}());
exports.default = Person;
