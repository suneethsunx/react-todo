import React from 'react'

const TodoLists = ({ todos, setTodos }) => {


    const removeTodo = (todoId) => {
        setTodos([...todos].filter(todo => todo.id !== todoId))
    }

    const handleComplete = ({ id }) => {
       
        setTodos(
            todos.filter(todo => {
                if (todo.id === id) {
                    todo.complete = !todo.complete
                }
                return todo
            })
        )
    }

    return (
        <div>
            <div className='w-[370px] rounded mt-4'>
                <div className="todo-detail text-stone-500 flex items-center justify-between">
                    <div className="left">
                        <p className="m-0">Total Tasks to do</p>
                    </div>
                    <p>{todos.length}</p>
                </div>
                <div className="todos-container mt-2">
                    {todos.length === 0 ?
                        <div className="welcome-msg ">
                            <div className="msg bg-blue-400 text-white p-3 w-full rounded  flex">
                                <div className="title">
                                    <h5>👋 Hello, Welcome to my React todo app...</h5>
                                </div>
                            </div>
                        </div>
                        : null}
                    <div className="todos">
                        {
                            todos.map((todo, index) => {
                                let completeTodoStyle = 'bg-white'
                                if (todo.complete) {
                                    completeTodoStyle = 'bg-stone-400 opacity-50'
                                }
                                return (
                                    <div key={index}>
                                        <div className={`todo ${completeTodoStyle} shadow-lg duration-100 p-3 mt-2 w-full rounded flex items-center justify-between`}>
                                            <div className="left flex items-center gap-2">
                                                <input onChange={() => handleComplete(todo)} type="checkbox" className='w-4 h-4' />
                                                <div className="title">
                                                    <h5>{todo.text}</h5>
                                                </div>
                                            </div>
                                            <div onClick={() => removeTodo(todo.id)}>
                                                <span className="iconify cursor-pointer opacity-75 hover:opacity-100 duration-100" data-icon="fxemoji:cancellationx"></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodoLists