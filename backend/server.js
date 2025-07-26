const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 5
});

// Test database connection
async function testConnection() {
  try {
    const conn = await pool.getConnection();
    console.log('Database connected successfully');
    conn.end();
  } catch (err) {
    console.error('cDatabase connection failed:', err.message);
  }
}

// Authentication Routes
// Register user
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const conn = await pool.getConnection();
    
    // Check if user already exists
    const existingUser = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      conn.end();
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Insert new user (Note: In production, hash the password!)
    await conn.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password]
    );
    
    conn.end();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login user
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const conn = await pool.getConnection();
    const users = await conn.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    conn.end();

    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ 
      message: 'Login successful', 
      user: { 
        username: users[0].username, 
        email: users[0].email 
      } 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Sponsorship Routes
// Add new sponsorship
app.post('/api/sponsorship', async (req, res) => {
  try {
    const { sponsor_name, refugee_name, amount } = req.body;
    
    if (!sponsor_name || !refugee_name || !amount) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      return res.status(400).json({ error: 'Amount must be a positive number' });
    }

    const conn = await pool.getConnection();
    await conn.query(
      'INSERT INTO sponsorships (sponsor_name, refugee_name, amount) VALUES (?, ?, ?)',
      [sponsor_name, refugee_name, parseFloat(amount)]
    );
    conn.end();

    res.status(201).json({ message: 'Sponsorship added successfully' });
  } catch (error) {
    console.error('Sponsorship creation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all sponsorships
app.get('/api/sponsorship', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const sponsorships = await conn.query('SELECT * FROM sponsorships ORDER BY sponsor_name');
    conn.end();

    res.json(sponsorships);
  } catch (error) {
    console.error('Fetch sponsorships error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Climate Refugees Backend is running' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await testConnection();
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🔄 Shutting down gracefully...');
  await pool.end();
  process.exit(0);
});