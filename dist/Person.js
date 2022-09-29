"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_id, _name, _job, _complete //default parameta (값 초기화)
    ) {
        if (_complete === void 0) { _complete = false; }
        this._id = _id;
        this._name = _name;
        this._job = _job;
        this._complete = _complete;
        this._id = _id;
        this._name = _name;
        this._job = _job;
        this._complete = _complete;
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
    Person.prototype.setJob = function (job) {
        this._job = job;
    };
    Person.prototype.getJob = function () {
        return this._job;
    };
    Person.prototype.setComplete = function () {
        this._complete = !this._complete;
    };
    Person.prototype.getComplete = function () {
        return this._complete;
    };
    return Person;
}());
exports.default = Person;
