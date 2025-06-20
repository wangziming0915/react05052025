// frontend/src/App.jsx

import { useState, useEffect } from "react";
import "./App.css";

const API = "http://localhost:3001"; 

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null); 
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []); 

  useEffect(() => {
    if (currentUser) {
      fetchTodos(currentUser);
    } else {
      setTodos([]); 
    }
  }, [currentUser]); 

  const fetchTodos = async (user) => {
    try {
      const res = await fetch(`${API}/todos/${user}`);
      if (res.ok) {
        const data = await res.json();
        setTodos(data);
      } else {
        const err = await res.json();
        console.error("Failed to fetch todos:", err.message);
        setErrorMsg(err.message || "Failed to load todos. Please log in again.");
        handleLogout();
      }
    } catch (error) {
      console.error("Network error fetching todos:", error);
      setErrorMsg("Network error. Please check your connection and try again.");
      handleLogout();
    }
  };

  const handleAuth = async () => {
    setErrorMsg(""); 
    
    if (!username.trim() || !password.trim()) {
      setErrorMsg("Username and password cannot be empty.");
      return;
    }

    const endpoint = isRegistering ? "/register" : "/login";

    try {
      const res = await fetch(`${API}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const data = await res.json();
        setCurrentUser(data.username);
        localStorage.setItem('currentUser', data.username);
        setUsername("");
        setPassword("");
        setErrorMsg("");
      } else {
        const err = await res.json();
        setErrorMsg(err.message || `Error during ${isRegistering ? "registration" : "login"}.`);
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
      }
    } catch (error) {
      console.error("Network error during authentication:", error);
      setErrorMsg("Network error. Please check your connection and try again.");
      setCurrentUser(null);
      localStorage.removeItem('currentUser');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null); 
    localStorage.removeItem('currentUser');
    setTodos([]);
    setUsername("");
    setPassword("");
    setErrorMsg("");
    setIsRegistering(false);
    console.log("User logged out (frontend action).");
  };

  const addTodo = async () => {
    if (!input.trim()) {
      setErrorMsg("Todo text cannot be empty.");
      return;
    }
    if (!currentUser) {
      setErrorMsg("Please log in to add todos.");
      return;
    }

    try {
      const res = await fetch(`${API}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: currentUser, text: input }),
      });

      if (res.ok) {
        const newTodo = await res.json();
        setTodos([...todos, newTodo]);
        setInput(""); 
        setErrorMsg(""); 
      } else {
        const err = await res.json();
        setErrorMsg(err.message || "Failed to add todo.");
      }
    } catch (error) {
      console.error("Network error adding todo:", error);
      setErrorMsg("Network error. Could not add todo.");
    }
  };

  const deleteTodo = async (id) => {
    if (!currentUser) {
      setErrorMsg("Please log in to delete todos.");
      return;
    }
    
    try {
      const res = await fetch(`${API}/todos`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: currentUser, id }),
      });
      
      if (res.ok) {
        setTodos(todos.filter(todo => todo.id !== id));
        setErrorMsg("");
      } else {
        const err = await res.json();
        setErrorMsg(err.message || "Failed to delete todo.");
      }
    } catch (error) {
      console.error("Network error deleting todo:", error);
      setErrorMsg("Network error. Could not delete todo.");
    }
  };

  if (!currentUser) {
    return (
      <div className="login-container">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleAuth(); }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleAuth(); }}
        />
        <button onClick={handleAuth}>
          {isRegistering ? "Register" : "Login"}
        </button>
        <div style={{marginTop: "10px"}}> </div> 
        <button onClick={() => { setIsRegistering(!isRegistering); setErrorMsg(""); }}>
          {isRegistering ? "Login" : "Register"}
        </button>
        {errorMsg && <p className="error-message">{errorMsg}</p>}
      </div>
    );
  }

  return (
    <div className="todo-container">
      <div className="header">
        <h2>{currentUser}</h2>
        <button className="logout-button" onClick={handleLogout}>Sign out</button>
      </div>
      
      <div className="input-row">
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Add new todos..."
          onKeyDown={(e) => { if (e.key === 'Enter') addTodo(); }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {errorMsg && <p className="error-message">{errorMsg}</p>}
      <ul>
        {todos.length === 0 && !errorMsg ? (
          <p className="no-todos-message">Add todos</p>
        ) : (
          todos.map(todo => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button className="delete-button" onClick={() => deleteTodo(todo.id)}>X</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;