import Book from './Book.js';

class EBook extends Book {
	constructor(title, author, publicationYear, fileFormat) {
		super(title, author, publicationYear);
		this.fileFormat = fileFormat;
	}

	printInfo() {
		console.log(
			`Book: "${this.title}", Author: ${this.author}, Year: ${this.publicationYear}, File Format: ${this.fileFormat}`,
		);
	}

	static createFromBook(book, fileFormat) {
		return new EBook(book.title, book.author, book.publicationYear, fileFormat);
	}
}

export default EBook;
