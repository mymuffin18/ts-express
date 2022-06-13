import { Request, Response } from 'express';

interface Todo {
	id?: number;
	title?: string;
	body?: string;
	isCompleted?: boolean;
}

let todos: Todo[] = [
	{
		id: 1,
		title: 'Todo 1',
		body: 'This is a body',
		isCompleted: true,
	},
	{
		id: 2,
		title: 'Todo 2',
		body: 'This is a body',
		isCompleted: true,
	},
	{
		id: 3,
		title: 'Todo 3',
		body: 'This is a body',
		isCompleted: true,
	},
	{
		id: 4,
		title: 'Todo 4',
		body: 'This is a body',
		isCompleted: true,
	},
	{
		id: 5,
		title: 'Todo 5',
		body: 'This is a body',
		isCompleted: true,
	},
];
let id: number = 6;

export const addTodo = (req: Request, res: Response) => {
	const { title, body } = req.body;
	const todo = {
		id: id,
		title: title,
		body: body,
		isCompleted: false,
	};
	todos.push(todo);
	id += 1;
	res.json(todo);
};

export const getAllTodos = (req: Request, res: Response) => {
	res.json(todos);
};

export const getTodo = (req: Request, res: Response) => {
	let todoId: number = parseInt(req.params.id);
	const todo = todos.find((element: Todo) => element.id === todoId);
	if (todo === undefined) {
		res.status(404).json({ message: 'Cannot find todo' });
	}
	res.json(todo);
};

export const editTodo = (req: Request, res: Response) => {
	let todoId: number = parseInt(req.params.id);
	let todo: Todo = todos.find((element: Todo) => element.id === todoId)!;
	if (todo === undefined) {
		res.json({ message: 'Cannot find Todo' });
		res.sendStatus(404);
	} else {
		const newTodo: Todo = {
			id: todo.id,
			title: req.body.title,
			body: req.body.body,
			isCompleted: todo.isCompleted,
		};
		const todosArr = todos.map((t) => {
			if (t.id === newTodo.id) {
				return { ...newTodo };
			}
			return { ...t };
		});

		todos = todosArr;

		res.json(newTodo);
	}
};

export const deleteTodo = (req: Request, res: Response) => {
	const todoId: number = parseInt(req.params.id);
	const todo: Todo = todos.find((element: Todo) => element.id === todoId)!;

	if (todo === undefined) {
		res.status(404).json({ message: 'Cannot find todo.' });
	} else {
		todos = todos.filter((element) => element.id !== todo.id);
		res.status(204).json({});
	}
};
