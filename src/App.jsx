import React from 'react';
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import Footer from "./components/Footer.jsx";



const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  function setTaskAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function toggleTaskCompletion(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskAndSave(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTaskAndSave(newTasks);
  }

  function editTask(taskId, newTitle) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTaskAndSave(newTasks);
  }



  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggleTaskCompletion}
        onEdit={editTask}
      />
    <Footer />
    </>
  );
}

export default App;
