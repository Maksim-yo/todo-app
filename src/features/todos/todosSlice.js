const initialState = [
  { id: 0, text: 'Learn React', status: 'Incomplete' },
  { id: 1, text: 'Learn Redux', status: 'Incomplete' },
  { id: 2, text: 'Build something fun!', status: 'Completed' },
];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export const todoToggled = (todoId) => ({
  type: 'todos/todoToggled',
  payload: todoId,
});

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload.text,
          status: action.payload.status,
        },
      ];
    }
    case 'todos/todoUpdate': {
      console.log(`Update: ${action.payload.status}`);
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          status: action.payload.status,
          text: action.payload.text,
        };
      });
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      return state;
  }
}
