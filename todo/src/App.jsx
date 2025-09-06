import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((p) => [...p, {
      id: Date.now(),
      ...todo,
    }]);
  }

  const deleteTodo = (id) => {
    setTodos((p) => p.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
    setTodos((p) => p.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((p) => p.map((todo) => todo.id === id ? updatedTodo  : todo));
  }

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if(storedTodos && storedTodos.length > 0){
      setTodos(storedTodos);
    }

  },[]);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  return (
    <>
      <TodoProvider value={{
        todos, setTodos, addTodo, deleteTodo, toggleTodo, updateTodo
      }}>
        <TodoForm/>
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>

      </TodoProvider>
    </>
  )
}

export default App
