import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todoListSlice';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const todoList = useSelector((state => state.todoList.todos));
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleAddTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      text: text,
      completed: false
    }));
  };

  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)}/>
      <button onClick={handleAddTodo}>add todo</button>
      <div>
        {todoList.map((todo) => 
          <div key={todo.id}>
            {todo.text}
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
