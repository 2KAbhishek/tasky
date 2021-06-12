import PropTypes from 'prop-types';
import './Task.css';
import {FaTrash} from 'react-icons/fa';

const Task = ( {task, onDelete, onToggle} ) => {
  return (
    <div className={`Task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text}
        <FaTrash onClick={() => onDelete(task.id)}
          style = {{color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Task;
