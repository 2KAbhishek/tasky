import {useState} from 'react';
import PropTypes from 'prop-types';

import './AddTask.css';
import Button from '../Button/Button';

const AddTask = ({onSave}) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please enter some text.');
      return;
    }

    onSave({text, time, done});

    setText('');
    setTime('');
    setDone(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-input">
        <label htmlFor="Task"></label>
        <input type="text" name="Task" placeholder="Add Task"
          id="task" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-text">
        <label htmlFor="Date"></label>
        <input type="datetime-local" name="Date"
          id="date" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <Button text={'Save'} type={'submit'}
        width= {'98%'}/>
    </form>
  );
};

AddTask.propTypes = {
  onSave: PropTypes.func,
};

export default AddTask;
