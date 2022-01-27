import { useState } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import TodoList from './features/todoList/TodoList.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>HIHI</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;