import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoToggled } from '../todos/todosSlice';
import TodoModal from './TodoModal';

export const selectTodos = (state) => state.todos.entities;

const TodoListItem = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const { id, text, completed, color } = todo;

  const dispatch = useDispatch();

  const handleCheckedChanged = () => {
    setChecked(!checked);
    dispatch({
      type: 'todos/todoUpdate',
      payload: {
        ...todo,
        status: checked ? 'Incomplete' : 'Completed',
      },
    });
  };

  const handleTodoDelete = () => {
    dispatch({
      type: 'todos/todoDeleted',
      payload: id,
    });
  };

  useEffect(() => {
    if (todo.status === 'Completed') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  return (
    <>
      <div className="todo-list-item">
        <div className="left-buttons">
          <input
            className="todo-complete"
            type="checkbox"
            checked={checked}
            onClick={handleCheckedChanged}
          />
          <div class="todo-text">{text}</div>
        </div>
        <div className="right-buttons">
          <div
            className="edit-item-btn"
            role="button"
            onClick={() => {
              setUpdateModalOpen(true);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
          </div>
          <div
            class="delete-item-btn"
            role="button"
            onClick={() => handleTodoDelete()}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
          </div>
        </div>
      </div>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
};

export default TodoListItem;
