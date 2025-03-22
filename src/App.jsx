import { useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";

function App() {
  const handleEdit = (id) => {
    const input = prompt(`edit is clicked from "${tasks[id]} "`);
    setTasks((prev) => {
      return prev.map((ele, index) => {
        if (index == id) {
          return input;
        } else {
          return ele;
        }
      });
    });
  };

  const handleDelete = (id) => {
    setTasks((prev) => {
      return prev.filter((task, index) => index != id);
    });
  };
  let [text, setText] = useState("");
  let [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setText(() => e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (text.length <= 0) {
      setText(() => "");
      alert("input can't be empty string");
      return;
    }
    if (tasks.includes(text)) {
      setText(() => "");
      alert(`this task is "${text}" already present`);
      return;
    }
    setTasks((prev) => [...prev, text]);
    setText(() => "");
  };
  return (
    <>
      <div>
        <h1 className="text-7xl p-20 font-bold text-white">To-Do-List</h1>
        <form onSubmit={handleClick} className="flex pl-23">
          <input
            onChange={handleChange}
            type="text"
            value={text}
            className="h-10 bg-white rounded-l-2xl"
          />
          <button
            onClick={handleClick}
            className="h-10 w-30 bg-blue-600 rounded-r-2xl font-bold"
          >
            Add-task
          </button>
        </form>
      </div>
      <div>
        <ul className="flex flex-col justify-center items-center list-none">
          <AddTask
            tasks={tasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </ul>
      </div>
    </>
  );
}

export default App;
