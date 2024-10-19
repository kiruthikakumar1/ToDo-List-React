import React, { useState } from 'react'
import TodoList from './TodoList'
import { useRef } from 'react'

const Todo1 = () => {
    const [tasks, setTasks] = useState([]);
    const ref = useRef();
    const add = () => {
        const inputText = ref.current.value.trim()
        const newTodo = {
            id: Date.now(),
            text: inputText,
            complete:false
        }
        setTasks((prev) => [...prev, newTodo])
        ref.current.value = ""
    }
    const checkTask=(id)=>{
        setTasks((prev)=>{
            return prev.map((todo)=>{
                if(todo.id===id){
                    return{...todo,complete:!todo.complete}
                }
                return todo
            })
        })
    }
    const deleteTask=(id)=>{
        setTasks((prev)=>{
            return prev.filter((todo)=>
                     todo.id!==id
            )
        })
    }

    return (
        <>
            <div>
                <h1 className='font-serif font-bold text-2xl text-lime-300 text-center my-10'>ToDo List</h1>
                <div className='flex  flex-col items-center'>
                    <div>
                        <input ref={ref} type="text" placeholder='Enter your task ...' className='w-[350px] border border-slate-500 p-2 rounded outline-none focus-none' />
                    </div>
                    <button onClick={add} className='w-[100px] font-bold border border-blue-500 p-2 rounded text-white font-serif bg-blue-600 my-3'>Add Task</button>
                </div>
            </div>
            <div className='w-[450px] border border-slate-700 p-4 rounded bg-white select-none'>
                <div>
                    <h1 className='text-blue-600 font-bold font-serif text-lg '>List of Tasks</h1>
                    <div>
                        {tasks.map((todo, index) => {
                            return <TodoList text={todo.text} key={index} complete={todo.complete} id={todo.id} checkTask={checkTask} deleteTask={deleteTask}/>
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Todo1