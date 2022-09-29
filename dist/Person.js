"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(id, name, job, complete //default parameta (값 초기화)
    ) {
        if (complete === void 0) { complete = false; }
        this.id = id;
        this.name = name;
        this.job = job;
        this.complete = complete;
        this.id = id;
        this.name = name;
        this.job = job;
        this.complete = complete;
    }
    Person.prototype.printDetails = function () {
        console.log("".concat(this.id, "\t").concat(this.name, "\t").concat(this.job, "\t").concat(this.complete ? "\t(complete)" : ""));
    };
    return Person;
}());
var thisPerson = new Person(1, "호세", "개발자", true);
exports.default = Person;
