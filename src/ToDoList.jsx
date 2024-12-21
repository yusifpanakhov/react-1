import React, { useState } from 'react'

function ToDoList(){
    import ToDoList from './ToDoList.jsx';

    function App() {
    
      return (<ToDoList />)
    }
    
    export default App
    
    import React, { useState } from 'react'
    
    function ToDoList(){
    
        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState("");
    
        function handleInputChange(event){
            setNewTask(event.target.value);
        }
    
        function addTask(){
            if(newTask.trim() !== ""){
                setTasks(t => [...t, newTask]);
                setNewTask("");
            }
        }
    
        function deleteTask(index){
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
        }
    
        function moveTaskUp(index){
    
            if(index > 0){
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index - 1]] = 
                [updatedTasks[index - 1], updatedTasks[index]];
                setTasks(updatedTasks);
            }
        }
    
        function moveTaskDown(index){
    
            if(index < tasks.length - 1){
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index + 1]] = 
                [updatedTasks[index + 1], updatedTasks[index]];
                setTasks(updatedTasks);
            }
        }

}
export default ToDoList