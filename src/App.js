import Todo from "./components/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>TO-DO</h1>
      <Todo />
    </div>
  );
}
