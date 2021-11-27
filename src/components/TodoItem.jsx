import styles from "./TodoItem.module.css";
export default function TodoItem({
  title,
  id,
  status,
  handleDelete,
  handleToggle
}) {
  function handleDone() {
    handleToggle(id);
  }
  return (
    <div className={status ? styles.completedTasks : styles.tasksCont}>
      {!status && <h3 style={{ margin: "0 20px", float: "left" }}>{title}</h3>}
      {status && (
        <h3
          style={{
            margin: "0 20px",
            float: "left",
            textDecoration: "line-through"
          }}
        >
          {title}
        </h3>
      )}
      <button
        style={{
          paddingLeft: "4px",
          height: "20px",
          width: "20px",
          float: "right",
          margin: "0 20px"
        }}
        onClick={() => handleDelete(id)}
      >
        X
      </button>
      {!status && (
        <input
          type="checkbox"
          style={{
            height: "20px",
            width: "20px",
            float: "right",
            margin: "0 20px"
          }}
          onChange={handleDone}
        />
      )}
    </div>
  );
}
