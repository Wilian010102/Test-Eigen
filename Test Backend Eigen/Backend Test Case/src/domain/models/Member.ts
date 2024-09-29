export class Member {
    constructor(
      public code: string,
      public name: string,
      public borrowedBooks: string[] = [],
      public penaltyUntil: Date | null = null
    ) {}
  
    canBorrowBook(): boolean {
      return this.borrowedBooks.length < 2 && (!this.penaltyUntil || this.penaltyUntil < new Date());
    }
  }
  