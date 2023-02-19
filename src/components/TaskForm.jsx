import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      desc,
    });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-3">CREA TU TAREA</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <textarea
        placeholder="Escribe la descprición de la tarea"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        value={desc}
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <button
      className="bg-indigo-500 px-3 py-1 text-white"
      >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
