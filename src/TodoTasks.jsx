import React, { useState } from 'react';
import SingleTask from './SingleTask';


const TodoTasks = (props) =>{

    const [task,setTask] = useState("");
    const [alltasks,setAllTasks] = useState([]);

    const TaskChanger = (event) =>{
        setTask(event.target.value);
    };
    const Submitter = (event) =>{
        event.preventDefault()
        if(task === "");
        else
        {
            setAllTasks((tasks) =>{
                return [...tasks,task]
            });
        }
        setTask("");
    };

    /* This function has been picked from a YT channel "Thapa Technical", specifically the filter method */
    const Remover = (id) => {
        setAllTasks((tasks) => {
            return tasks.filter((taskarr,index) => {
                return index !== id;
            })
        })
    };


    return(
        <React.Fragment>
        <div className="TaskHolder">
        <form onSubmit={Submitter}>
            <input type="text" value={task} className="TodoTask" placeholder="Add a Task" onChange={TaskChanger}/>
            <button className="AddButton">Add</button>
        </form>
        {alltasks.map((val,index) =>{
            return <SingleTask id={index} input={val} tap={Remover}/>
        })}
        </div>
        </React.Fragment>
    );
};

export default TodoTasks;