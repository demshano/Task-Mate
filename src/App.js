import { useEffect } from 'react';
import { useState } from 'react';
import {Header} from './components/Header';
import {AddTask} from './components/AddTask'
import {ShowTask} from './components/ShowTask';

export const  App =() =>
{

     const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
     const [task, setTask] = useState({});
     
      useEffect(()=>{
          localStorage.setItem('taskList', JSON.stringify(taskList)) 
     }, [taskList]);
 
    return(
       <div>
            <Header />     
            <AddTask 
            taskList={taskList} 
            setTaskList={setTaskList}
            task={task}
            setTask={setTask} 
            />
            <ShowTask 
            taskList={taskList} 
            setTaskList={setTaskList} 
            task={task}
            setTask={setTask}
            />
       </div>
)
}



