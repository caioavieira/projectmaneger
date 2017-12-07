import React, { Component } from 'react';

class TodoItem extends Component {
  deleteTodo(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Todo">
        <strong>{ this.props.todo.title }</strong>
      </li>
    );
  }
}

export default TodoItem;
