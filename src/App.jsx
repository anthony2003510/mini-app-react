import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'
import Algo from './components/Algo'
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <Algo />
      <TaskForm />
      <TaskList />
      </div>
    </main>
  )
}

export default App