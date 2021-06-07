import PropTypes from 'prop-types';
import './Task.css';
import {FaTimes} from 'react-icons/fa';

const Task = ( {task} ) => {
  return (
    <div className="Task">
      <h3>{task.text}
        <FaTimes style = {{color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
