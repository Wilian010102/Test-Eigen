
    /**
     * @swagger
     * /members:
     *   get:
     *     summary: Retrieve a list of members
     *     tags: [Members]
     *     responses:
     *       200:
     *         description: List of members
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   code:
     *                     type: string
     *                     description: Member code
     *                   name:
     *                     type: string
     *                     description: Member name
     */

import { Request, Response } from 'express';

export class MemberController {
    private memberRepo: any;

    constructor() {
        // Define the mock data or repository logic here
        this.memberRepo = {
            getAll: () => [
                { code: "M001", name: "Angga" },
                { code: "M002", name: "Ferry" },
                { code: "M003", name: "Putri" }
            ]
        };
    }

    public getMembers = (req: Request, res: Response) => {
        const members = this.memberRepo.getAll();
        res.json(members);
    }
}
