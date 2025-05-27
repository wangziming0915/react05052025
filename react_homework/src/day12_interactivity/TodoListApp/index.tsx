import { useState } from "react";

export default function TodoListApp() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const removeTodo = (idx: number) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") addTodo(); }}
        placeholder="Add a todo"
      />
      <button onClick={addTodo} title="Add">
        ➕
      </button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}{" "}
            <button onClick={() => removeTodo(idx)} title="Remove">
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
