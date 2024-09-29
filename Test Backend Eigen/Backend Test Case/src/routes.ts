import { Router } from 'express';
import { MemberController } from './app/controllers/MemberController';
import { BookController } from './app/controllers/BookController';

const router = Router();
const memberController = new MemberController();
const bookController = new BookController();

router.get('/members', memberController.getMembers);
router.get('/books', bookController.getBooks);

export default router;
