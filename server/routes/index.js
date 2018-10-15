const todoController = require('../controllers').todo;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message: 'Welcome to The API Node.JS',
    }))

    app.post('/api/todos', todoController.create)
    app.get('/api/todos', todoController.list)
    app.get('/api/todos/:todoId', todoController.detail)
    app.put('/api/todos/:todoId', todoController.update)
    app.delete('/api/todos/:todoId', todoController.destroy)

    app.post('/api/todos/:todoId/items', todoItemsController.create)
    app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update)
    app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy)
    
}