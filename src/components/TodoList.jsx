import React from 'react'

const TodoList = ({text,id,checkTask,complete,deleteTask}) => {
  return (
    <>
      <div className='flex flex-row  justify-between my-3 '>
        <div className={`w-[350px] flex flex-row p-2 justify-between ${complete?"bg-green-500 text-white rounded font-serif font-bold":""}`} onClick={()=>checkTask(id)}>
          <label className=' flex-1 border border-transparent border-b-slate-400 text-black font-serif text-md font-bold'>{text}</label>
          <button className='bg-green-600 text-white py-1 rounded px-2' >Checked</button>
        </div>
        <div className='p-2'>
          <button className='bg-red-600 text-white py-1 rounded px-2' onClick={()=>deleteTask(id)}>Delete</button>
        </div>
        
       
      </div>

    </>

  )
}

export default TodoList