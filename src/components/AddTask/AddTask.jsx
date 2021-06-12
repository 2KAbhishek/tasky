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
      <div className="form-checkbox">
        <label htmlFor="Reminder"></label>
        <input type="checkbox" name="" id="reminder" />
      </div>

      <input type="submit" value="Save" />
    </form>
  );
};

export default AddTask;
