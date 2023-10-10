import '../app.css';
export const AddTask = ({taskList, setTaskList,task,setTask}) => {

const handleSubmit = (e) =>
{
e.preventDefault();

if(task.id)
{
const date = new Date();
const updateTask = taskList.map((todo) => (
  todo.id === task.id ? {id: task.id, name: task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
));
setTaskList(updateTask);
setTask({});
}
else{
  const date = new Date();
  console.log(date);

  
  
  const newTask = {
                   id: date.getTime(), 
                   name: e.target.task.value, 
                   time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                  }
  
                  setTaskList([...taskList, newTask]);
  
                  e.target.task.value="";
                  setTask({});
}



}


  return (
 
    
    <section>


      <form className="addTaskBox" onSubmit={handleSubmit}>
        <input type="text" name="task" autoComplete="off" placeholder="Add Task" maxLength={20} value={task.name || ""} onChange={e => setTask({...task, name: e.target.value})} />
        <button className='addBtn' type="submit">{task.id ? "Update" : "Add"}</button>

      </form>


    </section>
   
      
  )
}
