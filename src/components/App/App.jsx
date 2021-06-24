import {useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';
import AddTask from '../AddTask/AddTask';

/**
 * Main app component
 * @return {*}
 */
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Build Projects',
      time: 'June 13th',
      done: false,
    },
    {
      id: 2,
      text: 'Add to portfolio',
      time: 'June 16th',
      done: true,
    },
  ]);

  const saveTask = (task) => {
    const id = tasks.length + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
     {...task, done: !task.done} : task));
  };

  return (
    <div className="App">
      <Header title={'Tasky'}/>
      <AddTask onSave={saveTask}/>
      {tasks.length > 0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleDone}/>) :
      (<h3>No Tasks!</h3>)}
    </div>
  );
};

export default App;
