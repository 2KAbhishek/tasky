import {useState} from 'react';
import './App.css';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';

/**
 * Main app component
 * @return {*}
 */
const App = () => {
  const [tasks] = useState([
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

  return (
    <div className="App">
      <Header title={'Tasky'}/>
      <Tasks tasks={tasks}/>
    </div>
  );
};

export default App;
