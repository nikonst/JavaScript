"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(t, a) {
        var _this = this;
        this.getBook = function () {
            return "".concat(_this.title, " ").concat(_this.author);
        };
        this.title = t;
        this.author = a;
    }
    return Book;
}());
exports.Book = Book;
