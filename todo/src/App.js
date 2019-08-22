import React from 'react';
import './App.css';
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

function App() {

  const todoData = [
    { id:1, label: 'Drink Coffee', important: false},
    { id:2, label: 'Create Awesome App', important: true},
    { id:3, label: 'Buy milk', important: false}
  ];

  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
