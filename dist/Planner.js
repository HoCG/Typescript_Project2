"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Planner = /** @class */ (function (_super) {
    __extends(Planner, _super);
    function Planner(_id, _name, _age, _job) {
        if (_job === void 0) { _job = "기획자"; }
        var _this = _super.call(this, _id, _name, _age) || this;
        _this._job = _job;
        return _this;
    }
    Planner.prototype.introduce = function () {
        console.log("인녕 나는 기획자야");
    };
    return Planner;
}(Person_1.default));
exports.default = Planner;
