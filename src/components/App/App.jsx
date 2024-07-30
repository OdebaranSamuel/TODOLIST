import React, {useState} from 'react'

import './App.css';

import H1 from '../H1';
import Form from "../Form"
import Table from '../Table';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task)=>{
    setTasks([...tasks, task]);
  };

  const handleDelete = (index)=>{
    const newTasks = tasks.filter((_, taskIndex)=> taskIndex !== index);
    setTasks(newTasks)
  }
  return (
    <div className="App">
      <H1/>
     <div className="container-app">
       <Table tasks={tasks} handleDelete={handleDelete} />
     </div>
       <Form addTask={addTask}/>
    </div>
  );
}

export default App;
