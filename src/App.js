import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import { useState } from 'react';


const App = () => {

  const [tasks, setTasks] = useState(
    [{
      id: 1,
      text: 'aaaaa',
      day: ' Jan 111',
      reminder: true,
    },
    {
      id: 2,
      text: 'bbbbb',
      day: ' Jun 666',
      reminder: false,
    },
    {
      id: 3,
      text: 'ccccc',
      day: ' Dec 121212',
      reminder: false,
    }
    ])
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder:
      !task.reminder } : task)
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show!'}
    </div>
  );
}

export default App;
