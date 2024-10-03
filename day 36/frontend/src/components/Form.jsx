
import React, { useState } from 'react'
import { addTodo } from '../utils/Api'

const Form = () => {

    const [todo, setTodo] = useState('')

    const handleAddTodo = async (e) => {
        e.preventDefault();
        const response = await addTodo(todo)
        if(response.status === 200){
            setTodo("")
            window.location.reload()        }
    }

    return (
        <div className='w-full'>
            <form className='flex items-center justify-center gap-4' onSubmit={handleAddTodo}>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" name='todo' required className='input lg:min-w-[500px] text-black' placeholder='enter your thought ' />
                <button type="submit" className='btn btn-outline btn-success '>Add Todo</button>
            </form>
        </div>
    )
}

export default Form