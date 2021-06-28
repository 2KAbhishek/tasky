import {useState, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';
import AddTask from '../AddTask/AddTask';

/**
 * Main app component
 * @return {*}
 */
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5432/tasks');
      const data = await res.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const saveTask = (task) => {
    const id = tasks.length + 1;

    // Added for datetime input to string, firefox doesn't support datetime
    const date = new Date(task.time);
    let timeStr = task.time;
    if (date.toDateString() !== 'Invalid Date') {
      timeStr = date.toDateString() + ', ' + date.toLocaleTimeString();
    }
    task.time = timeStr;

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
      <Header title={'Tasky'} onAdd={() => setShowForm(!showForm)}
        showForm={showForm}/>
      {showForm && <AddTask onSave={saveTask}/>}
      {tasks.length > 0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleDone}/>) :
      (<h2>No Tasks!</h2>)}
    </div>
  );
};

export default App;
