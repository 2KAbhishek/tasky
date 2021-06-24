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
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Build Projects',
      time: 'Sun Jun 24 2021, 08:03:00 PM',
      done: false,
    },
    {
      id: 2,
      text: 'Add to portfolio',
      time: 'Wed Jun 16 2021, 10:03:00 AM',
      done: true,
    },
  ]);

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
      (<h3>No Tasks!</h3>)}
    </div>
  );
};

export default App;
