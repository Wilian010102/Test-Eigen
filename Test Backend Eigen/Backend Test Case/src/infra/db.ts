// db.ts

// Mock Data
const members = [
    { code: "M001", name: "Angga" },
    { code: "M002", name: "Ferry" },
    { code: "M003", name: "Putri" }
];

const books = [
    { code: "JK-45", title: "Harry Potter", author: "J.K. Rowling", stock: 1 },
    { code: "SHR-1", title: "A Study in Scarlet", author: "Arthur Conan Doyle", stock: 1 },
    { code: "TW-11", title: "Twilight", author: "Stephenie Meyer", stock: 1 },
    { code: "HOB-83", title: "The Hobbit", author: "J.R.R. Tolkien", stock: 1 },
    { code: "NRN-7", title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", stock: 1 }
];

// Simulate repository functionality
export const memberRepo = {
    getAll: () => members,
    getByCode: (code: string) => members.find(member => member.code === code)
};

export const bookRepo = {
    getAll: () => books,
    getByCode: (code: string) => books.find(book => book.code === code),
    updateStock: (code: string, delta: number) => {
        const book = books.find(book => book.code === code);
        if (book) {
            book.stock += delta;
            return book;
        }
        return null;
    }
};
