import PropTypes from 'prop-types';
import './Task.css';

const Task = ( {task} ) => {
  return (
    <div>
      <h3>{task.text}</h3>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
