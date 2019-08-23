import React, {Component} from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header'
import SearchPanel from './components/search-panel/search-panel'
import TodoList from './components/todo-list/todo-list'
import ItemStatusFilter from './components/item-status-filter/item-status-filter'
import ItemAddForm from './components/item-add-form/item-add-form'

export default class App extends Component {

  maxId = 100;

  state = {
    todoData : [
      { id:1, label: 'Drink Coffee', important: false},
      { id:2, label: 'Create Awesome App', important: true},
      { id:3, label: 'Buy milk', important: false},
      { id:4, label: 'Drink Coffee', important: false},
      { id:5, label: 'Create Awesome App', important: true},
      { id:6, label: 'Buy milk', important: false}
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {

      const idx = todoData.findIndex((el) => el.id === id )

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray
      }

    })
  };

  addItem = (text) => {
    // generate id ?
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    // add element in array ?
    this.setState(({todoData}) => {
      const newArray = [
        ...todoData,
        newItem
      ];
      return {
        todoData: newArray
      }
    });
  };

  render () {
    return (
      <div className="todo-app container">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter/>
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={ this.deleteItem }
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }

}
