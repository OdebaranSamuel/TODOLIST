import React, {useState} from 'react'

import "./style.css"
import { MdAddCircle } from "react-icons/md";


function Form({ addTask }){
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(newTask.trim()){
            addTask(newTask);
            setNewTask('');
        }
    };
    return(
        <form onSubmit={handleSubmit} className="container-input">
            <input 
            type="text" 
            placeholder="Adicione a sua tarefa"
            className="input"
            value={newTask}
            onChange={(event)=> setNewTask(event.target.value)}
            >
            </input>
            <button 
            type="submit" 
            className="btn-input">
                <MdAddCircle className="plus"/>
            </button>
        </form>
    )
}
export default Form;