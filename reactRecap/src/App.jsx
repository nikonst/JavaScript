import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import TaskCard from './components/TaskCard'
import TaskForm from './components/TaskForm'

const theTasks = [
  {
    id: 1,
    title: 'Design dashboard',
    status: 'todo',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Implement authentication',
    status: 'in-progress',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Write documentation',
    status: 'done',
    priority: 'low',
  },
]

function App() {
  const [tasks, setTasks] = useState(theTasks)
  const [showImportantOnly, setShowImportantOnly] = useState(false)

  const visibleTasks = showImportantOnly
    ? tasks.filter((task) => {
      //console.log(task.priority)
      return task.priority === 'high'
    })
    : tasks

  const addTitle = (title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      status: null,
      priority: null,
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      newTask,
    ])
  }
  //console.log(visibleTasks)
  return (
    <>
      <AppHeader title={'TaskForge'} subtitle={'Manage your projects and tasks'} />
      <button onClick={() => {
        setShowImportantOnly(prev => !prev)
      }
      }>
        {showImportantOnly ? 'Show All Tasks' : 'Show Important Only'}
      </button>
      {visibleTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        visibleTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
      <TaskForm addTitle={addTitle} />
    </>
  )
}

export default App
