import React, { memo } from 'react';
import Todo from './todo/todo';
import './App.css';

function App() {
  return (
    <div className="App">
        <Todo/>
    </div>
  );
}

export default memo(App);
