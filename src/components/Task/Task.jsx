import PropTypes from 'prop-types';
import './Task.css';

import {FaCheck, FaTrash} from 'react-icons/fa';

const Task = ( {task, onDelete, onToggle} ) => {
  return (
    <div className={`Task ${task.done ? 'done' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <div className="row">
        <h3>{task.text}</h3>
        <FaCheck onClick={() => onToggle(task.id)}
          style = {{color: 'green', cursor: 'pointer'}}/>
      </div>
      <div className="row">
        <p>{task.time}</p>
        <FaTrash onClick={() => onDelete(task.id)}
          style = {{color: 'red', cursor: 'pointer'}}/>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Task;
