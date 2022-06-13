import { Router } from 'express';
import {
	addTodo,
	deleteTodo,
	editTodo,
	getAllTodos,
	getTodo,
} from '../controllers/TodoController';
const router = Router();

router.get('/', getAllTodos);

router.post('/', addTodo);

router.get('/:id', getTodo);

router.put('/:id', editTodo);

router.delete('/:id', deleteTodo);
module.exports = router;
