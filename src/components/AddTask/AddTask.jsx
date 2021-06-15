import './AddTask.css';
import Button from '../Button/Button';
const AddTask = () => {
  return (
    <form>
      <div className="form-input">
        <label htmlFor="Task"></label>
        <input type="text" name="Task" placeholder="Add Task" id="task" />
      </div>
      <div className="form-text">
        <label htmlFor="Date"></label>
        <input type="datetime-local" name="Date" id="date" />
      </div>
      <Button text={'Save'} type={'submit'}
        width= {'98%'}/>
    </form>
  );
};

export default AddTask;
