import React from 'react';
import './App.css';
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
}

export default App;
