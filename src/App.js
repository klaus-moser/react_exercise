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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
