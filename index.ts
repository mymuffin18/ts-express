import express, { Express, Request, Response } from 'express';
const todoRouter = require('./routes/todos');

const app: Express = express();

const port: number = 3000;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
	res.send('<h1>Typescript Express</h1>');
});
app.use('/todos', todoRouter);

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
