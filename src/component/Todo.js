import React, { Component } from 'react'
import todo from '../lib/todo-service';
import Item from './Item';
import EditItem from './EditItem';
import Form from './Form';
const initialData = [{title:'finish demo', body:'buy milk', order: 0}]


class Todo extends Component {
  state = {
    todos: initialData,
    editIndex: '',
  }



handleTodo = () => {
  const { todos, editIndex } = this.state
  // console.log(todos)
  // todo.createTodo()
  return todos.map((item,index) => {
    if( editIndex !== index ) {
    return <Item
              key={`${item}-${index}`}
              index={index}
              text={item}
              upIndex={this.handleUp}
              downIndex={this.handleDown}
              deleteIndex={this.handleDelete}
              editIndex={this.handleEdit}
            />
    } else {
      return <EditItem
              key={`${item}-${index}`}
              index={index}
              text={item}
              deleteIndex={this.handleDelete}
              updateIndex={this.handleUpdate}
            />
    }
  })
}

handleUp = (index) =>{
  const { todos } = this.state;
  const newTodos = [...todos];
  if(index !== 0) {
    newTodos[index - 1] = todos[index]
    newTodos[index] = todos[index - 1]
    newTodos.map((todo,index) => {
      todo.order =index
      return todo
    })
    todo.updateTodo(newTodos)
    this.setState({
      todos: newTodos
    })
  }
}


handleDown = (index) => {
  const { todos } = this.state;
  if(index !== todos.length - 1) {
    const newTodos = [...todos];
    newTodos[index] = todos[index + 1]
    newTodos[index + 1] = todos[index]
    newTodos.map((todo,index) => {
      todo.order =index
      return todo
    })
    todo.updateTodo(newTodos)
    this.setState({
      todos: newTodos
    })
  }
}

handleCreate = (title,body) => {
  const newTodo = {
    title: title,
    body: body,
    order: this.state.todos.length
  }
  if(title) {
    todo.createTodo(newTodo)
    const { todos } = this.state;
    const newTodos = [...todos,newTodo];
    this.setState({
      todos: newTodos,
    })
  }
}

handleDelete = (index) => {
  const { todos } =this.state
  todo.deleteTodo(todos[index]._id)
    todos.splice(index,1)
    this.setState({
      todos: [...todos]
    })
}

handleEdit = (index) => {
  console.log('edit in app', index)
  this.setState({
    editIndex: index
  })
}

handleUpdate = (editIndex, title, body) => {
  const { todos } = this.state;
  let newTodos = [];
  todos.forEach((todo,index) =>{
    if(index === editIndex) {
      let newTodo = todo
      newTodo.title = title
      newTodo.body = body
      newTodos = [...newTodos, newTodo];
    } else {
      newTodos = [...newTodos, todo];
    }
  })
  console.log(newTodos)
  todo.updateTodo(newTodos[editIndex])
  this.setState({
    todos: newTodos,
    editIndex: '',
  })
}

componentDidMount() {
  todo.getAllTodos()
    .then((data) => {
      data.sort(function(a, b){
        return a.order-b.order
    })
    console.log(data)
      this.setState({
        todos:data
      })
    })
}


  render() {
    return (
      <div>
        <p>Todo List</p>
        <Form addToList={this.handleCreate}/>
        <div className="todo-list">
          {this.handleTodo()}
        </div>
        {/* <button onClick={this.handleCreate}>Add</button> */}
      </div>
    )
  }
}

export default Todo