import {useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';

/**
 * Main app component
 * @return {*}
 */
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Build Projects',
      day: 'June 13th',
      reminder: false,
    },
    {
      id: 2,
      text: 'Add to portfolio',
      day: 'June 16th',
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Header title={'Tasky'}/>
      {tasks.length > 0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask}/>) :
      (<h3>No Tasks!</h3>)}
    </div>
  );
};

export default App;
