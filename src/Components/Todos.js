import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={ todo.title } todo={ todo } />
        );
      });
    }
    return (
      <div className="Todos">
        <h3 className="text-center">Todo List</h3>
        <p>{ todoItems }</p>
      </div>
    );
  }
}

export default Todos;