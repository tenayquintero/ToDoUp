import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ListTask from "./components/ListTask/ListTask";
import useList from "./hooks/useList";
import "./App.css";

const App = () => {
  const itemTask = useList();

  return (
    <div className="app">
      <Header />
      <section className="container_form_list">
        <h2>📎</h2>
        <Form itemTask={itemTask.add} />
        <ListTask
          itemTask={itemTask.get}
          deleteTask={itemTask.remove}
          upDate={itemTask.upDate}
        />
      </section>
    </div>
  );
};

export default App;
