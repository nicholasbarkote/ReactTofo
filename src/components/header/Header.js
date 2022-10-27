import React , {useState} from 'react'
import { FaPlus } from 'react-icons/fa'
import { SiTodoist } from 'react-icons/si'
import TodoForm from '../TodoForm/TodoForm'
import './Header.css'
    
function Header({onSubmit,filterTodo}) {

    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className='Head'>

            <SiTodoist
                className='todo-img'
                size={30}
            />

            <form
                className='todo-form'
            >
                <input
                    type="text"
                    placeholder="Search ToDo"
                    className="todo-search"
                    name="search"
                    onChange={event =>{filterTodo(event.target.value)}}
                />

            </form>
            <FaPlus
                className='todo-img'
                onClick={()=>setIsOpen(true)}
                size={30}   
            />
            {isOpen && <TodoForm 
            onSubmit = {onSubmit}
            setIsOpen={setIsOpen}/>}
        </div>
    )
}

export default Header