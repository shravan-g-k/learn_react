import React from 'react'
import { useTodoContext } from '../contexts/TodoContext';

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = React.useState(false);
    const [todoMsg, setTodoMsg] = React.useState(todo.todo);

    const {toggleTodo,deleteTodo,updateTodo} = useTodoContext();

    const editTodo = () => {
            updateTodo(todo.id,{...todo,todo:todoMsg});

        setIsTodoEditable(false);
    }

    const toggleComplete = () => {
        toggleTodo(todo.id);
    }
  return (
    <div className={`flex items-center justify-between px-4 py-2 border-b-2 border-gray-200 ${todo.completed ? "line-through" : ""}`} >
        <div className="flex items-center gap-2">
            <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
            {isTodoEditable ? (
                <input type="text" value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} className="border-2 border-gray-300 rounded-md p-1" />
            ) : (
                <span>{todo.todo}</span>
            )}
        </div>
        <div className="flex items-center gap-2">
            {isTodoEditable ? (
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" onClick={editTodo}>Save</button>
            ) : (
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded" onClick={() => setIsTodoEditable(true)}>Edit</button>
            )}
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    
    </div>
  )
}

export default TodoItem
