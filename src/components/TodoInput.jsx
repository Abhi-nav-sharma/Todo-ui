import { useState } from "react";
import styles from "./TodoInput.module.css";
export default function TodoInput({ clickAdd }) {
  const [task, setTask] = useState({
    title: ""
  });

  function handleInput(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    clickAdd(task);
  }

  return (
    <div className={styles.inputCont}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          placeholder="Add a to-do"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
