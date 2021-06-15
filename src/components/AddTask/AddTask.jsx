import {useState} from 'react';
import './AddTask.css';
import Button from '../Button/Button';

const AddTask = () => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  return (
    <form>
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

export default AddTask;
