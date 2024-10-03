import React, { useEffect, useState } from 'react'
import { deleteTodo, getTodos, updateTodo } from '../utils/Api';

const List = () => {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")

    useEffect(() => {
        getTodos().then(res => setTodos(res.data.todos)).catch(err => console.log(err));
    }, [])


    const handleTodoUpdate = async (e) => {
        e.preventDefault()
        const response = await updateTodo(todo._id, todo.text)
        console.log(response)
        if (response.status === 200) {
            window.location.reload();
        }
    }
    
    const handleTodoDelete = async (id) => {
        const response = await deleteTodo(id);
        if(response.status === 200) {
            window.location.reload();
        }
    }

    return (
        <div className='w-full max-w-xl'>
            {
                todos?.map(todo => (
                    <div key={todo._id} className='flex items-center justify-between gap-4 bg-slate-400 p-4 my-2 w- rounded-lg hover:bg-slate-700 cursor-pointer'>
                        <h1>{todo.text}</h1>
                        <div className='flex items-center justify-center gap-2'>
                            <button onClick={() => {
                                setTodo(todo)
                                document.getElementById('my_modal_2').showModal()
                            }} className='btn btn-warning'>Update</button>
                            <button onClick={() => handleTodoDelete(todo._id)} className='btn btn-primary'>Delete</button>
                        </div>

                    </div>
                ))
            }
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-black">
                    <div className='w-full'>
                        <form className='flex items-center justify-center gap-4' onSubmit={handleTodoUpdate}>
                            <input value={todo.text} onChange={(e) => setTodo({
                                _id: todo._id,
                                text: e.target.value
                            })} type="text" name='todo' required className='input text-black border' placeholder='enter your thought ' />
                            <button type="submit" className='btn btn-outline btn-success '>Update</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default List