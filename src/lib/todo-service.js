import axios from 'axios';

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true
    })
  }

  getAllTodos() {
    return this.todo.get('/api/v1/todos')
      .then(({ data }) => data);
  }

  getTodo(id) {
    return this.todo.get('/api/v1/todos/:id')
      .then(({ data }) => data);
  }

  createTodo(todo) {
    return this.todo.post('/api/v1/todos', {newTodo: todo})
      .then(response => response.data)
  }

  deleteTodo(id) {
    return this.todo.delete(`/api/v1/todos/${id}`)
    .then(({ data }) => data);
  }

  updateTodo(todo) {
    return this.todo.put(`/api/v1/todos/${todo._id}`, {newTodo: todo})
    .then(({ data }) => data);
  }
}

const todo = new Todo();

export default todo