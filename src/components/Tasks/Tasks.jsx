import {useState} from 'react';

const Tasks = () => {
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

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
