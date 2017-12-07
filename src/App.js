import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        this.setState({todos: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getProjects() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-xs-6 col-sm-4">
            <AddProject addProject={ this.handleAddProject.bind(this) } />
          </div>
          <div className="vr"></div>
          <div className="col-xs-6 col-sm-4">
            <Projects projects={ this.state.projects } onDelete={ this.handleDeleteProject.bind(this) } />
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-xs-12 col-sm-8">
            <hr />
            <Todos todos={ this.state.todos } />
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
