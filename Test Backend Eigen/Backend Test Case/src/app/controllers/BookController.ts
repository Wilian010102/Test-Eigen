
    /**
     * @swagger
     * /books:
     *   get:
     *     summary: Retrieve a list of books
     *     tags: [Books]
     *     responses:
     *       200:
     *         description: List of books
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   code:
     *                     type: string
     *                     description: Book code
     *                   title:
     *                     type: string
     *                     description: Book title
     *                   author:
     *                     type: string
     *                     description: Author of the book
     *                   stock:
     *                     type: integer
     *                     description: Number of available copies
     */

import { Request, Response } from 'express';

export class BookController {
    private bookRepo: any;

    constructor() {
        // Define the mock data or repository logic here
        this.bookRepo = {
            getAll: () => [
                { code: "JK-45", title: "Harry Potter", author: "J.K. Rowling", stock: 1 },
                { code: "SHR-1", title: "A Study in Scarlet", author: "Arthur Conan Doyle", stock: 1 },
                { code: "TW-11", title: "Twilight", author: "Stephenie Meyer", stock: 1 },
                { code: "HOB-83", title: "The Hobbit", author: "J.R.R. Tolkien", stock: 1 },
                { code: "NRN-7", title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", stock: 1 }
            ]
        };
    }

    public getBooks = (req: Request, res: Response) => {
        const books = this.bookRepo.getAll();
        res.json(books);
    }
}
