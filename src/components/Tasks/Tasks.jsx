const tasks = [
  {
    id: 1,
    text: 'Build Projects',
    day: 'June 10',
    reminder: false,
  },
  {
    id: 2,
    text: 'Add to portfolio',
    day: 'June 17',
    reminder: true,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.key}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
