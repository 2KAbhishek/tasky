import './App.css';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';
/**
 * Main app component
 * @return {*}
 */
const App = () => {
  return (
    <div className="App">
      <Header title={'Tasky'}/>
      <Tasks />
    </div>
  );
};

export default App;
