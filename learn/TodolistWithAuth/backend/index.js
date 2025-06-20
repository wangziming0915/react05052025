// backend/index.js

const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid"); 

const app = express();
app.use(cors()); 
app.use(express.json()); 


const users = {}; 
const passwords = {}; 

app.get("/test", (req, res) => {
  console.log("[Backend] Received GET /test request.");
  res.send("Connected to backend");
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(`[Backend] Attempting to register user: ${username}`);

  if (!username || !password) {
    return res.status(400).json({ message: "Missing username or password" });
  }

  if (users[username]) {
    return res.status(409).json({ message: "User already exists" });
  }

  users[username] = [];
  passwords[username] = password;
  console.log(`[Backend] User registered successfully: ${username}`);
  console.log("[Backend] Current users state (after register):", JSON.stringify(users, null, 2));
  res.json({ username });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`[Backend] Received login attempt for username: ${username}`);
  console.log(`[Backend] Request body: ${JSON.stringify(req.body)}`);
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  if (!users[username] || passwords[username] !== password) {
    console.log(`[Backend] Login failed for ${username}: Invalid credentials.`);
    return res.status(401).json({ message: "Invalid credentials" });
  }

  console.log(`[Backend] Login successful for username: ${username}`);
  res.json({ message: "Login successful", username });
});

app.get("/todos/:username", (req, res) => {
  const { username } = req.params;
  console.log(`[Backend] Fetching todos for username: ${username}`);
  res.json(users[username] || []);
});

app.post("/todos", (req, res) => {
  const { username, text } = req.body;
  console.log(`[Backend] Add todo attempt for username: ${username}, text: ${text}`);

  if (!username || !text) {
    return res.status(400).json({ message: "Missing fields (username or text)" });
  }

  if (!users[username]) {
    console.log(`[Backend] Add todo failed: User ${username} not found.`);
    return res.status(400).json({ message: "User not found" });
  }

  const newTodo = { id: uuidv4(), text };
  users[username].push(newTodo);
  console.log(`[Backend] Todo added for ${username}: "${newTodo.text}"`);
  console.log(`[Backend] ${username}'s current todos:`, JSON.stringify(users[username], null, 2));
  res.status(201).json(newTodo); 
});

app.delete("/todos", (req, res) => {
  const { username, id } = req.body;
  console.log(`[Backend] Delete todo attempt for username: ${username}, todo ID: ${id}`);

  if (!users[username]) {
    console.log(`[Backend] Delete todo failed: User ${username} not found.`);
    return res.status(400).json({ message: "User not found" });
  }

  const initialLength = users[username].length;
  users[username] = users[username].filter(todo => todo.id !== id);

  if (users[username].length === initialLength) {
    console.log(`[Backend] Delete todo failed: Todo ID ${id} not found for user ${username}.`);
    return res.status(404).json({ message: "Todo not found" });
  }

  console.log(`[Backend] Todo deleted for ${username}: ID ${id}`);
  res.json({ message: "Deleted" });
});

app.listen(3001, () => {
  console.log("------------------------------------------");
  console.log("Backend Server running on http://localhost:3001");
  console.log("------------------------------------------");
});