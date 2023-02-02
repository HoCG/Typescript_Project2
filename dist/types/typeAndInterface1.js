"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Doctor = /** @class */ (function () {
    function Doctor(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
        this.place = '';
        this.married = false;
        this.product = '';
    }
    Doctor.prototype.setDocter = function (DoctorInfo, _product) {
        this.age = DoctorInfo.age;
        this.hairColor = DoctorInfo.hairColor;
        this.married = DoctorInfo.married;
        this.name = DoctorInfo.name;
        this.place = DoctorInfo.place;
        this.product = _product;
    };
    return Doctor;
}());
var johansun = new Doctor('조한슨', 23, '#ffffff');
johansun.setDocter(__assign(__assign({}, johansun), { place: '서울', married: false }), '수용');
console.log(johansun);
