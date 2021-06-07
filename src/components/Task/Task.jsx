import PropTypes from 'prop-types';
import './Task.css';
import {FaTimes} from 'react-icons/fa';

const Task = ( {task, onDelete} ) => {
  return (
    <div className="Task">
      <h3>{task.text}
        <FaTimes onClick={() => onDelete(task.id)}
          style = {{color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Task;
