import React, { useState, useRef, useEffect } from 'react'

const CreateForm = ({ todos, setTodos }) => {

    const [todo, setTodo] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setTodo(e)
    }

    const handleSubmit = (e) => {
        if (todo.length > 0) {
            setTodos([...todos, { id: Date.now(), text: todo, complete: false }])
            setTodo('')
        }
    }

    return (
        <div>
            <div className="form-container mt-3 flex">
                <input ref={inputRef} autoFocus id='input_form' value={todo} onChange={(e) => handleChange(e.target.value)} type="search" placeholder='Test me ! Type something ...' className='outline-none p-2 px-4 rounded drop-shadow-lg duration-100 ease-in-out' />
                <button onClick={(e) => handleSubmit(e)} className='bg-blue-500 hover:bg-blue-600 duration-100 ease-in-out text-white font-semibold p-2 px-3 rounded ml-3 flex items-center gap-1'>
                    <span className="iconify" data-icon="material-symbols:add"></span>
                    Add
                </button>
            </div>
        </div>
    )
}

export default CreateForm