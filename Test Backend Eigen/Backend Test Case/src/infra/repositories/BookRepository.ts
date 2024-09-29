import { Book } from '../../domain/models/Book';

const books: Book[] = [
  new Book("JK-45", "Harry Potter", "J.K Rowling", 1),
  new Book("SHR-1", "A Study in Scarlet", "Arthur Conan Doyle", 1),
  new Book("TW-11", "Twiilght", "Stephenie Meyer", 1),
  new Book("HOB-83", "The Hobbit, or There and Back Again", "J.R.R. Tolkien", 1),
  new Book("NRN-7", "The Lion, the Witch and the Wardrobe", "C.S. Lewis", 1),
];

export class BookRepository {
  findAll(): Book[] {
    return books;
  }

  findByCode(code: string): Book | undefined {
    return books.find(book => book.code === code);
  }

  save(book: Book): void {
    // Save logic here, for now it's just mock data
  }
}
