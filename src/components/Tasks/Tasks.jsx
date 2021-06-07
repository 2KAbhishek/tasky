import PropTypes from 'prop-types';
import Task from '../Task/Task';

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}> <Task task={task}/></h3>
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
};

export default Tasks;
