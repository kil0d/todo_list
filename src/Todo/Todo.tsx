import  './Todo.css'
import {Checkbox} from "@mui/material";

export const Todo = ({taskName, handleDelete} : any) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const todoFinished = (e: any) => {
        const item = e.target.closest('.item');
        const todoName = item.children[1];
        if(e.target.checked) {
            todoName.className+= ' active'
        }
        else {
            todoName.classList.remove('active')
        }
    }
    return (
        <label className="item">
            <Checkbox  className="checkbox" onClick={(e)=> {todoFinished(e)}} {...label}  color="success" />
            <div className="todo-name fs-24 bold">{taskName}</div>
            <div onClick={handleDelete} className="delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                    <path fillRule="evenodd"
                          d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/>
                </svg>
            </div>
        </label>
    )
}