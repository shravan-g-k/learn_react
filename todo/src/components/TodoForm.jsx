import React from 'react'
import { useTodoContext } from '../contexts/TodoContext';

function TodoForm() {

    const [todo,setTodo] = React.useState("");
    const { addTodo}  = useTodoContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({todo,completed:false});
        setTodo("");
    }

  return (
    <form className="flex  gap-2 p-2" onSubmit={handleSubmit}>
        <input className="rounded-md border-2 border-gray-300 p-2 w-full" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add a new task" required />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add</button>
    </form>
  )
}

export default TodoForm
