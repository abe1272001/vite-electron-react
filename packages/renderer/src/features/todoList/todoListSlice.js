import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    todos: [
      {
        id: 1, 
        text: 'today is a beautiful day',
        completed: false
      },
      {
        id: 2, 
        text: 'today is a suck day',
        completed: false
      }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    }
  }
});

export const { addTodo } = todoListSlice.actions;

export default todoListSlice.reducer;

