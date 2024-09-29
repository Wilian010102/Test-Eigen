import { Member } from "../models/Member";
import { Book } from "../models/Book";
import { MemberRepository } from "../../infra/repositories/MemberRepository";
import { BookRepository } from "../../infra/repositories/BookRepository";

export class BorrowingService {
  constructor(
    private memberRepo: MemberRepository,
    private bookRepo: BookRepository
  ) {}

  borrowBook(memberCode: string, bookCode: string): string {
    const member = this.memberRepo.findByCode(memberCode);
    const book = this.bookRepo.findByCode(bookCode);

    if (!member || !book) return 'Member or book not found';
    if (!member.canBorrowBook()) return 'Cannot borrow more books';
    if (!book.isAvailable()) return 'Book not available';

    book.stock -= 1;
    member.borrowedBooks.push(book.code);

    this.bookRepo.save(book);
    this.memberRepo.save(member);

    return 'Book borrowed successfully';
  }

  returnBook(memberCode: string, bookCode: string): string {
    const member = this.memberRepo.findByCode(memberCode);
    const book = this.bookRepo.findByCode(bookCode);

    if (!member || !book) return 'Member or book not found';
    if (!member.borrowedBooks.includes(bookCode)) return 'This book was not borrowed by the member';

    // Penalty check
    const borrowedDate = new Date(); // Assume borrow date is stored
    const returnDate = new Date();
    const diff = (returnDate.getTime() - borrowedDate.getTime()) / (1000 * 60 * 60 * 24);
    if (diff > 7) {
      member.penaltyUntil = new Date(returnDate.getTime() + 3 * 24 * 60 * 60 * 1000); // Penalty for 3 days
    }

    book.stock += 1;
    member.borrowedBooks = member.borrowedBooks.filter(b => b !== book.code);

    this.bookRepo.save(book);
    this.memberRepo.save(member);

    return 'Book returned successfully';
  }
}
