"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(t, a) {
        this.getBook = () => {
            return `${this.title} ${this.author}`;
        };
        this.title = t;
        this.author = a;
    }
}
exports.Book = Book;
