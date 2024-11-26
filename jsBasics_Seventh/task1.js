import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const eBook1 = new EBook('1984', 'George Orwell', 1949, 'EPUB');

book1.printInfo();
book2.printInfo();
eBook1.printInfo();

const oldestBook = Book.getOldestBook([book1, book2, eBook1]);
console.log('Oldest Book:');
oldestBook.printInfo();

const newEBook = EBook.createFromBook(book1, 'PDF');
console.log('New EBook:');
newEBook.printInfo();
