export class Book {
    private title: string
    private author: string

    constructor(t: string, a: string) {
        this.title = t
        this.author = a
    }

    public getBook = () => {
        return `${this.title} ${this.author}`;
    }
}