import '../showTask.css';
import { BiEdit } from 'react-icons/bi';
import { BiSolidTrash } from 'react-icons/bi';
export const ShowTask = ({taskList, setTaskList, task,setTask}) => {



const handleEdit=(id)=>{
const selectedTask = taskList.find((todo)=>todo.id===id);
setTask(selectedTask);
}

const handleDelete=(id)=>{
const updatedTaskList = taskList.filter((todo)=>todo.id !==id);
setTaskList(updatedTaskList);
}

  return (
   
<section className="showTask">

<div className="head">

  <div>
    <span className="title">Todo</span> 
    <span className="count">{taskList.length}</span>
  </div>

<button className="clearAll" onClick={()=> setTaskList([])}>Clear All</button>

</div>

 {/*task component start---------  */}
  
<ul>

{taskList.map((todo) =>
(
  <div className="showTaskBox" key={todo.id}>
<li key={todo.id}>

  <div className='taskdetails'>
    <span className="name">{todo.name}</span>
    <span className="time">{todo.time}</span>
  </div>

{/* react icons */}
<div className="reactIcons">

<span className='touchIcon' onClick={()=>handleEdit(todo.id)}><BiEdit /></span>
<span className='touchIcon' onClick={()=>handleDelete(todo.id)}><BiSolidTrash /></span>

</div>

</li>
</div>

)
)}


</ul>
 {/*task component end---------  */}

</section>

  )
}
