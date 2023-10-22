import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.payload,
        isCompleted: false,
      }
      state.push(newTodo)
    },
    toggleComplete(state, action) {
      const todo = state.find((el) => el.id === action.payload)
      todo.isCompleted = !todo.isCompleted
    },

    deleteTodo(state, action) {
      return state.filter((el) => el.id !== action.payload)
    },
  },
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
