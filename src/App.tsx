import {ChangeEventHandler, MouseEventHandler, useState} from 'react'
import './App.css'
import {Todo} from "./Todo/Todo.tsx";
import {TodoHeadIcon} from "./assets/TodoHeadIcon.tsx";
import {c} from "vite/dist/node/types.d-aGj9QkWt";

function App() {
    interface TodoItem  {
        id: number,
        taskName : string,
        isDone : boolean
    }
    const [lastItemId, setLastItemId] = useState(0)
    const [list, setList] = useState<TodoItem[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    const handleChange:ChangeEventHandler<HTMLInputElement> =(e) =>{
        setInputValue(e.target.value)
    }
    const handleChangeItem = (newTodo) => {
        const changedList = list.map(todo => {
            if(todo.id === newTodo.id) {
                return newTodo
            }
            return todo
        })
        setList([...changedList])
    }
    const handleSubmit: MouseEventHandler<HTMLButtonElement> =(e) =>{
        e.preventDefault()
        setLastItemId(prev => prev+1)
        setList([...list,  {
            id: lastItemId,
            taskName: inputValue,
            isDone: false
        }])
        setInputValue('')
    }
    const handleDelete = (id: number) => {
        const filteredTodos = list.filter((todo) =>  todo.id !== id)
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
                        <div id={todo.id} key={todo.id}>
                            <Todo onChange={handleChangeItem}  onDelete = {() => handleDelete(todo.id)} todo={todo}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App
