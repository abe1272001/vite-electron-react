import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todoListSlice';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem.jsx';

function TodoList() {
  const todos = useSelector((state => state.todoList.todos));
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleAddTodo = () => {
    const trimText = text.trim();
    if (trimText === '') {
      return;
    } else {
      dispatch(addTodo({
        id: uuidv4(),
        text: text,
        completed: false
      }));
      setText('');
    }
  };

  return (
    <div>
      <input type="text" autoFocus={true} placeholder='What needs to be done?' onChange={e => setText(e.target.value)} value={text}/>
      <button onClick={handleAddTodo}>add todo</button>
      <div>
        {todos.map((todo) => 
          <TodoItem todo={todo} key={todo.id}/>
        )}
      </div>
    </div>
  );
}

export default TodoList;
