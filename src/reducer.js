import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
import { combineReducers } from 'redux'

export default function rootReducer(state = {}, action) {
  console.log('reducse')
  return {
    todos: todosReducer(state.todos, action),
    filters: filtersReducer(state.filters, action),
  }
}
