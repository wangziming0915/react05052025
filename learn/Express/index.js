const express = require('express');
const shortid = require('shortid');

const app = express();
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const port = 3000;
const todos = [{id: shortid.generate(), name: 'Wash', completed: false}];

app.get('/todos', (req, res) => {
    //res.send(`ID: ${todos[0].id}`);
    res.status(200).json({message: 'get todos successfully', data: todos});
});

app.post('/todos', (req, res) => {
    const {name} = req.body;
    const newTodo = {id: shortid.generate(), name, completed: false};
    todos.push(newTodo);
    res.status(200).json({ message: 'Data received successfully', data: newTodo});
});

app.put('/todos/:id', (req, res) => {
    res.send('put');
});//todo

app.delete('/todos/:id', (req, res) => {
    res.send('Hello, World!');
});//todo

app.listen(port, () => console.log(`Server listening on port ${port}`));