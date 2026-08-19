import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import TaskCard from './components/TaskCard'

const tasks = [
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
  const [showImportantOnly, setShowImportantOnly] = useState(false)

  const visibleTasks = showImportantOnly
    ? tasks.filter((task) => {
      //console.log(task.priority)
      return task.priority === 'high'
    })
    : tasks

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
      {visibleTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  )
}

export default App
