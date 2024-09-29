import { BorrowingService } from '../domain/services/BorrowingServices';
import { MemberRepository } from '../infra/repositories/MemberRepository';
import { BookRepository } from '../infra/repositories/BookRepository';

test('borrow a book successfully', () => {
  const memberRepo = new MemberRepository();
  const bookRepo = new BookRepository();
  const service = new BorrowingService(memberRepo, bookRepo);

  const result = service.borrowBook('M001', 'JK-45');
  expect(result).toBe('Book borrowed successfully');
});

test('return a book successfully', () => {
  const memberRepo = new MemberRepository();
  const bookRepo = new BookRepository();
  const service = new BorrowingService(memberRepo, bookRepo);

  const result = service.returnBook('M001', 'JK-45');
  expect(result).toBe('Book returned successfully');
});
