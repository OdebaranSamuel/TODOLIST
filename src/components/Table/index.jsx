import React from 'react'

import "./style.css"
import { MdDelete } from "react-icons/md";


function Table({ tasks, handleDelete }){
    const date = new Date();
    const actualDate = date.toLocaleDateString();
    const time = date.toLocaleTimeString();

    return(
        <table className="main-table">
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Criada em</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index)=>(
                    <tr key={index}>
                        <td>{task}</td>
                        <td>{actualDate} {time} </td>
                        <td>
                            <select>
                                <option value="pendente">Pendente</option>
                                <option  value="executando">Executando</option>
                                <option  value="finalizada">Finalizada</option>
                            </select>
                        </td>
                        <td>
                            <button 
                            className="btn-action delete"
                            onClick={()=>handleDelete(index)}
                            >
                                <MdDelete 
                                className="modifica deletar" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    )
}

export default Table;