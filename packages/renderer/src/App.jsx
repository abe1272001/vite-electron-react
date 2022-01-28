import Layout from './components/layout/Layout';
import TodoList from './features/todoList/TodoList.jsx';
import './app.css';

function App() {
  return (
    <Layout>
      <div className="App">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <TodoList/>
      </div>
    </Layout>
  );
}

export default App;