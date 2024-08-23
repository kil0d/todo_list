import {ChangeEventHandler, MouseEventHandler, useState} from 'react'
import './App.css'
import {Todo} from "./Todo/Todo.tsx";
import {TodoHeadIcon} from "./assets/TodoHeadIcon.tsx";

function App() {
interface TodoItem  {
    id: number,
    taskName : string,
    isDone : boolean
}
const [lastItem, setLastItem] = useState(0)
const [list, setList] = useState<TodoItem[]>([])
const [inputValue, setInputValue] = useState<string>('')
const handleChange:ChangeEventHandler<HTMLInputElement> =(e) =>{
    setInputValue(e.target.value)
}
const handleSubmit: MouseEventHandler<HTMLButtonElement> =(e) =>{
    e.preventDefault()
    setList([...list,  {
        id: lastItem,
        taskName: inputValue,
        isDone: false
    }])
    setLastItem(prev => prev+1)
    setInputValue('')
}
const handleDelete = (item: number) => {
    // @ts-ignore
    const filteredTodos = list.filter((todo) =>  todo.id !== item)
    setList([...filteredTodos])
}
  return (
      <>
          <div className="todo-head">
            <TodoHeadIcon/>
            <div className="fs-32 bold">To-Do List</div>
          </div>
          <div className="input-field">
              <input value={inputValue} onChange={handleChange} className="input" type="text" placeholder={"Add your task"}/>
              <button onClick={handleSubmit} className="button">ADD +</button>
          </div>
          <div className="todos">
              {list.map((todo) => {
                  return (
                      <div key={todo.id}>
                          <Todo  onDelete = {() => handleDelete(todo.id)} todo={todo}/>
                      </div>
                  )
              })}
          </div>
      </>
  )
}

export default App
