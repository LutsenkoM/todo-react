import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header'
import SearchPanel from './components/search-panel/search-panel'
import TodoList from './components/todo-list/todo-list'
import ItemStatusFilter from './components/item-status-filter/item-status-filter'

function App() {

  const todoData = [
    { id:1, label: 'Drink Coffee', important: false},
    { id:2, label: 'Create Awesome App', important: true},
    { id:3, label: 'Buy milk', important: false}
  ];

  return (
    <div className="todo-app container">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter/>
      </div>

      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
