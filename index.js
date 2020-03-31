import React, { Component } from 'react';
import { render } from 'react-dom';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, content: 'buy milk'},
        {id: 2, content: 'go shopping'}
      ]
    };
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }


  render() {
    return (
      <div className="todo-app container">
        <h2 className="blue-text center">Todo's:</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
