class Book {
	constructor(title, author, publicationYear) {
		this.title = title;
		this.author = author;
		this.publicationYear = publicationYear;
	}

	printInfo() {
		console.log(`Book: "${this.title}", Author: ${this.author}, Year: ${this.publicationYear}`);
	}

	static getOldestBook(books) {
		return books.reduce((oldest, current) => (current.publicationYear < oldest.publicationYear ? current : oldest));
	}
}

export default Book;
