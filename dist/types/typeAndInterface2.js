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
var Musicion = /** @class */ (function () {
    function Musicion(name, age, hairColor) {
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
    Musicion.prototype.setMusicion = function (musicionInfo, _product) {
        this.age = musicionInfo.age;
        this.hairColor = musicionInfo.hairColor;
        this.married = musicionInfo.married;
        this.name = musicionInfo.name;
        this.place = musicionInfo.place;
        this.product = _product;
    };
    return Musicion;
}());
var mario = new Musicion('조한슨', 23, '#ffffff');
mario.setMusicion(__assign(__assign({}, mario), { place: '서울', married: false }), '두둠칫칫칫');
console.log(mario);
