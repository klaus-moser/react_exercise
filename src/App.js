import Header from "./components/Header";
import Tasks from './components/Tasks';
import { useState } from 'react';


const App = () => {

  const [tasks, setTasks] = useState(
    [{
      id: 1,
      text: 'asdf',
      day: ' Feb 123',
      reminder: true,
    },
      {
        id: 2,
        text: 'fffff',
        day: ' Feb 666',
        reminder: false,
      }])
  
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
