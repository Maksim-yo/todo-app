import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import TodoModal from './TodoModal';

const TodoList = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => {
      if (state.filters.status === 'All') return true;
      if (state.filters.status === todo.status) return todo;
    }),
  );

  const renderedListItems = todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });
  return <div className="todo-list">{renderedListItems}</div>;
};

export default TodoList;
