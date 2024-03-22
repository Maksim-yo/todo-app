import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import TodoModal from '../TodoList/TodoModal';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleFilterChanged = (e) => {
    dispatch({
      type: 'filters/statusFilterChanged',
      payload: e.target.value,
    });
  };

  return (
    <div className="todo-header">
      <button className="todo-add" onClick={() => setModalOpen(true)}>
        Add task
      </button>
      <select className="todo-filter" onChange={(e) => handleFilterChanged(e)}>
        <option value="All" selected>
          All
        </option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default Header;
