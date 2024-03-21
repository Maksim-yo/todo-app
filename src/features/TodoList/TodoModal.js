import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoModal = ({ type, modalOpen, setModalOpen, todo }) => {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Incomplete');
    const dispatch = useDispatch();

    useEffect(() => {
        if (type === 'update' && todo) {
            setTitle(todo.text);
            setStatus(todo.status);

        } else {
            setTitle('');
            setStatus('Incomplete');
        }
    }, [type, todo, modalOpen])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === '') {
            return;
        }
        if (title && status) {
            if (type === 'add') {
                dispatch({
                    type: 'todos/todoAdded',
                    payload: {
                        text: title,
                        status: status
                }
                })
            }
            if (type === 'update' && todo) {
                console.log('cli')
                if (todo.text != title || todo.status != status) {
                    // setStatus()
                    dispatch({ 
                        type: 'todos/todoUpdate',
                        payload: {
                            ...todo, 
                            text: title, 
                            status: status 
                        }})
                }
            }
        }
        setModalOpen(false);

    }

    return (
        <>
            {modalOpen && (
                <div className='modal'>
                    <div className='container'>
                        <div className='header'>
                            <div className='formTitle'>
                                {type === 'add' ? 'Add Task' : 'Update Task'}
                            </div>
                            <div className='closeBtn' role='button' onClick={() => setModalOpen(false)}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0V0z">
                                    </path>
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className='modal-form'>
                                <label for='title' className='title'>
                                    Title
                                    <input type='text' name='title' onChange={(e) => setTitle(e.target.value)} value={title}></input>
                                </label>
                                <label for='type' className='title'>
                                    Status
                                    <select id="type" className='status' value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option value="Incomplete">Incomplete</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </label>
                            </div>
                            <div className='modal-btn-container'>
                                <button type='submit' class='btn-add' >
                                    {type === 'add' ? 'Add Task' : 'Update Task'}
                                </button>
                                <button type='button' class='btn-cancel' onClick={() => setModalOpen(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default TodoModal
