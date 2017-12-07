import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: [
      'Web Design',
      'Web Development',
      'Mobile Development'
    ]
  }

  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert('Title is required!');
    } else {
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, () => {
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={ category } value={ category }>{ category }</option>  
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <div className="form-group padding">
            <label>Title</label>
            <input type="text" className="form-control" ref="title" />
          </div>
          <div className="form-group padding">
            <label>Category</label>
            <select className="form-control" ref="category">
              { categoryOptions }
            </select>
          </div>
          <input type="submit" className="form-control" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
