import { useState } from "react";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";
import ShowCompletedBtn from "./ShowCompletedBtn";
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  function handleAdd({ title }) {
    const payload = {
      id: uuid(),
      title,
      status: false
    };
    setTasks([...tasks, payload]);
  }
  function handleDelete(id) {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  }
  function handleToggle(id) {
    const updatedTasks = tasks.map((item) => {
      if (id === item.id) {
        item.status = !item.status;
        return item;
      } else {
        return item;
      }
    });
    setTasks(updatedTasks);
  }
  console.log(tasks);
  return (
    <>
      <TodoInput clickAdd={handleAdd} />
      <ShowCompletedBtn
        show={showCompleted}
        onClick={() => setShowCompleted(!showCompleted)}
      />
      {tasks
        .filter((item) => (showCompleted ? true : !item.status))
        .map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              status={item.status}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
    </>
  );
}
