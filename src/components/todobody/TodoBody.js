import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from '../TodoForm/TodoForm'
import './TodoBody.css'
function TodoBody({ todos,deleteTodo,updateTodo }) {

    const [isOpen, setIsOpen] = useState();

    const [edit, setEdit] = useState({
        text: '',
        priority: '',
        id: null
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            text: '',
            priority: '',
            id: null
        });
    }

    const handleDelete = id =>{
        deleteTodo(id);
    }


    if (edit.id) {
        console.log("Updated" + isOpen); 
    }

    

    return todos.map((todo, index) => (
        <div
            className={`todo-row ${todo.priority}`}
            key={index}
        >
            <div
                key={todo.id}
            >
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    className='delete-icon'
                    onClick={() => handleDelete(todo.id)}
                />
                <TiEdit
                    className='edit-icon'
                    onClick={() =>{ 
                        setEdit({
                        text: todo.text,
                        priority: todo.priority,
                        id: todo.id
                        });
                        setIsOpen(true);

                }}
                />
                
            </div>
            {isOpen && <TodoForm 
            setIsOpen = {setIsOpen}

            onSubmit = {submitUpdate}
            edit={edit}/>}
        </div>

    ))
}

export default TodoBody