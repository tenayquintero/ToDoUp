import './App.css';
import Form from './Components/Form/Form';
import ListTask from './Components/ListTask/ListTask';
import useList from './hooks/useList';


function App() {
  const itemTask = useList();
  return (
    <div className="App">
      <header className="App-header">
        <Form itemTask={itemTask.add}/>
        <ListTask itemTask={itemTask.get} deleteTask={itemTask.remove}/>
      </header>
      <button>click</button>
    </div>
  );
}

export default App;
