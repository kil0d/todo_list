import { useState } from 'react'

import './App.css'
import {Todo} from "./Todo/Todo.tsx";

function App() {

const [list, setList] = useState<any>([])
const [inputValue, setInputValue] = useState<string>('')
    const handleChange =(e: any) =>{
        setInputValue(e.target.value)
    }
    const handleSubmit =(e: any) =>{
        e.preventDefault()
        setList([...list, inputValue])
        setInputValue('')
    }
    const handleDelete = (index: any) => {
        const newTodos = [...list]
        newTodos.splice(index, 1)
        setList(newTodos)
    }
  return (
      <>
          <div className="todo-head">
              <svg className="todo-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                   fill="#000000"
                   version="1.1" id="Capa_1" viewBox="0 0 297 297" xmlSpace="preserve">
                  <g>
                      <path
                          d="M237.333,33h-50.14c-2.558-18.613-18.556-33-37.86-33s-35.303,14.387-37.86,33h-51.14C50.408,33,42,41.075,42,51v228   c0,9.925,8.408,18,18.333,18h177c9.925,0,17.667-8.075,17.667-18V51C255,41.075,247.258,33,237.333,33z M93.052,48   c3.432,18.033,19.084,31,38.092,31h36.379c19.008,0,34.66-12.967,38.092-31H223v216H75V48H93.052z M149.333,16   c10.456,0,19.242,7.259,21.601,17h-43.201C130.091,23.259,138.877,16,149.333,16z"/>
                      <rect x="99" y="109" width="50" height="15"/>
                      <polygon
                          points="200.689,105.076 189.645,94.924 175.427,110.39 169.237,105.347 159.763,116.976 176.907,130.944  "/>
                      <rect x="99" y="157" width="50" height="15"/>
                      <polygon
                          points="200.689,153.076 189.645,142.924 175.427,158.39 169.237,153.347 159.763,164.976 176.907,178.944  "/>
                      <rect x="99" y="205" width="50" height="15"/>
                      <polygon
                          points="200.689,201.076 189.645,190.924 175.427,206.39 169.237,201.347 159.763,212.976 176.907,226.944  "/>
                  </g>
              </svg>
              <div className="fs-32 bold">To-Do List</div>
          </div>
          <div className="input-field">
              <input value={inputValue} onChange={handleChange} className="input" type="text" placeholder={"Add your task"}/>
              <button onClick={handleSubmit} className="button">ADD +</button>
          </div>
          <div className="todos">
              {list.map((todo: any) => {
                  return (
                      <>
                          <Todo handleDelete = {handleDelete} taskName={todo}/>
                      </>
                  )
              })}
          </div>
      </>
  )
}

export default App
