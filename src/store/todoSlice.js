import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {

    addTodo: (state, action) => {
      state.items.push({
        id: crypto.randomUUID() ?? Date.now().toString(),
        title: action.payload.title,
        about: action.payload.about,
        isPinned: false,
      });
    },

    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
 
    updateTodo: (state, action) => {
      const { id, title, about } = action.payload;
      const todo = state.items.find(t => t.id === id);
      if (todo) {
        todo.title = title;
        todo.about = about;
      }
    },

    togglePin: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (!todo) return;

      if (!todo.isPinned) {
        const pinnedCount = state.items.filter(t => t.isPinned).length;
        if (pinnedCount >= 3) {
          alert("Максимальное количество закрепов: 3");
          return;
        }
      }
      todo.isPinned = !todo.isPinned;
    },
    reorderTodos: (state, action) => {
      state.items = action.payload;
    }
  },
});

export const { addTodo, deleteTodo, updateTodo, togglePin, reorderTodos } = todoSlice.actions;
export default todoSlice.reducer;