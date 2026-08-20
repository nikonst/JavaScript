// ADD
// setItems(prev => [...prev, newItem])

// // DELETE
// setItems(prev => prev.filter(item => item.id !== id))

// // UPDATE
// setItems(prev => prev.map(item => ...))

// // ADD
// setItems(prev => [...prev, newItem])

// // DELETE
// setItems(prev => prev.filter(item => item.id !== id))

// // UPDATE
// setItems(prev =>
//   prev.map(item =>
//     item.id === id
//       ? { ...item, /* changes */ }
//       : item
//   )
// )

// ADD    → [...prev, newItem]
// DELETE → prev.filter(...)
// UPDATE → prev.map(...)

// Συνηθισμένα cleanup cases:

// setInterval  → clearInterval
// setTimeout   → clearTimeout
// addEventListener → removeEventListener
// subscription → unsubscribe

import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import TaskCard from './components/TaskCard'
import TaskForm from './components/TaskForm'
import { useEffect } from 'react'
import UserContext from './UserContext'
import Counter from './components/Counter'
import AsyncDemo from './components/AsyncDemo'
import DetailsPanel from './components/drills/DetailsPanel'

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
  const [numOfTasks, setNumOfTasks] = useState(theTasks.length)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('tick')
    }, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    setNumOfTasks(tasks.length)
  }, [tasks.length])

  const visibleTasks = showImportantOnly
    ? tasks.filter((task) => {
      //console.log(task.priority)
      return task.priority === 'high'
    })
    : tasks

  const addTask = ({ title, status, priority }) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      status: status,
      priority: priority,
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      newTask,
    ])
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(item => item.id !== id))
  }

  const markDone = (id) => {
    setTasks(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: 'done' }
          : item
      )
    )
  }

  const user = {
    name: 'Nikos',
    role: 'developer',
  }
  //console.log(visibleTasks)
  return (
    <UserContext.Provider value={user}>
      <AppHeader title={'TaskForge'} subtitle={'Manage your projects and tasks'}
        numOfTasks={numOfTasks} />
      <Counter/>
      <AsyncDemo />
      <DetailsPanel/>
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
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} markDone={markDone} />
        ))
      )}
      <TaskForm addTask={addTask} />
    </UserContext.Provider>
  )
}

export default App
