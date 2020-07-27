import React, { Component } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';

class App extends React.Component {
  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);

    this.state = {
      toDoList: [
        { title: 'Taks 2', isComplete: false },
        { title: 'Taks 1', isComplete: false }
      ],
      init: ''
    };
  }

  handleOnChange(e) {
    let text = e.target.value;
    this.setState({ init: text });
  }

  handleOnClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { toDoList } = this.state;
      const ind = toDoList.indexOf(item);

      this.setState(toDoList.map((item, index) => {
        if (index === ind) {
          item.isComplete = !isComplete;
        }
      }))
    }
  }

  handleOnClickDelete(item) {
    return (event) => {
      const { toDoList } = this.state;
      const ind = toDoList.indexOf(item);
      const ListAfterDelete = toDoList.splice(ind, 1);
      this.setState({toDoList: toDoList});
    }
  }

  handleOnKeyUp(e) {
    if (e.keyCode === 13) {// Enter: 13
      let text = e.target.value;
      text = text.trim();

      if (!text) {
        return;
      }

      this.setState({
        toDoList: [{ title: text, isComplete: false }, ...this.state.toDoList],
        init: ''
      });
    }
  }

  render() {
    const { toDoList } = this.state;
    return (
      <div className="App">
        <p className="header">Todos List</p>
        <input
          className="input_task"
          type="text"
          placeholder="Enter your task"
          value={this.state.init}
          onKeyUp={this.handleOnKeyUp}
          onChange={this.handleOnChange}
        />
        <p className="app_task">
          {
            toDoList.map((item, index) => <ToDoList
              key={index}
              item={item}
              onClick={this.handleOnClick(item)}
              onClickDelete={this.handleOnClickDelete(item)}
            />)
          }
        </p>
      </div>
    );

  }
}

export default App;
