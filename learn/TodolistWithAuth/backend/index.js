// backend/index.js

const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid"); 
const mysql = require('mysql2/promise');

const app = express();
app.use(cors()); 
app.use(express.json()); 


// const users = {}; 
// const passwords = {}; 
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'todo_app_db',
  port: 3306,
});

app.get("/test", (req, res) => {
  console.log("[Backend] Received GET /test request.");
  res.send("Connected to backend");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(`[Backend] Attempting to register user: ${username}`);

  if (!username || !password) {
    return res.status(400).json({ message: "Missing username or password" });
  }

  try {
    const [rows] = await db.query('SELECT username FROM users WHERE username = ?', [username]);
    if (rows.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }
    await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    res.json({ username });
  } catch (err) {
    res.status(500).json({ message: "Database error" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }
  try {
    const [rows] = await db.query('SELECT password FROM users WHERE username = ?', [username]);
    if (rows.length === 0 || rows[0].password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful", username });
  } catch (err) {
    res.status(500).json({ message: "Database error" });
  }
});

app.get("/todos/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const [rows] = await db.query('SELECT id, text FROM todos WHERE username = ?', [username]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Database error" });
  }
});

app.post("/todos", async (req, res) => {
  const { username, text } = req.body;
  if (!username || !text) {
    return res.status(400).json({ message: "Missing fields (username or text)" });
  }
  try {
    await db.query('INSERT INTO todos (id, username, text) VALUES (?, ?, ?)', [uuidv4(), username, text]);
    res.status(201).json({ message: "Todo added" });
  } catch (err) {
    res.status(500).json({ message: "Database error" });
  }
});

app.delete("/todos", async (req, res) => {
  const { username, id } = req.body;
  try {
    const [result] = await db.query('DELETE FROM todos WHERE username = ? AND id = ?', [username, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Database error" });
  }
});

app.listen(3001, () => {
  console.log("------------------------------------------");
  console.log("Backend Server running on http://localhost:3001");
  console.log("------------------------------------------");
});