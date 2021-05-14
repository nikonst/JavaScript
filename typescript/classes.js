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
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var p1 = new Person("Ann Adams");
p1.greet();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        return _super.call(this, name) || this;
    }
    Employee.prototype.worksOn = function () {
        console.log(this.name + " works on many tasks.");
    };
    return Employee;
}(Person));
var p2 = new Employee("Mary Smith");
p2.greet();
p2.worksOn();
