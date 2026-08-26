// import { useState } from 'react'
import { Link, Route, Routes } from 'react-router'
import './App.css'
//@ts-ignore
import TaskLogPage from './pages/TaskLogPage'
//@ts-ignore
import AddTaskPage from './pages/AddTaskPage'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Task</Link>
        <Link to="/add-task"> + </Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskLogPage/>}/>
        <Route path="/add-task" element={<AddTaskPage/>}/>
      </Routes>
    </div>
  )
}

