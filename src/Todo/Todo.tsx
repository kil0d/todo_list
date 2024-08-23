import  './Todo.css'
import {Checkbox} from "@mui/material";
import {ChangeEventHandler, MouseEventHandler} from "react";
import {TrashIcon} from "../assets/TrashIcon.tsx";

export const Todo = ({todo, onDelete} : any) => {
    const handleDelete:MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        onDelete()
    }
    const handleChangeDone: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(todo.isDone)
        todo.isDone = e.target.checked
    }
    const handleChangeTaskName: ChangeEventHandler<HTMLInputElement> = (e) => {
        todo.taskName = e.target.value

    }
    return (
        <div className="item">
            <Checkbox id={todo.id} checked={todo.isDone}  className="checkbox" onChange={handleChangeDone} inputProps={{'aria-label': 'Checkbox demo' }} color="success" />
            <input onChange={handleChangeTaskName} className="todo-name fs-24 bold" value={todo.taskName}/>
            <button onClick={handleDelete} className="delete"><TrashIcon/></button>
        </div>
    )
}