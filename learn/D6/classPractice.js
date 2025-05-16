class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 310);
const book2 = new Book('1984', 'George Orwell', 328);

console.log(book1.getInfo()); // The Hobbit by J.R.R. Tolkien, 310 pages
console.log(book2.getInfo()); // 1984 by George Orwell, 328 pages