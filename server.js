const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
  user: ' ',
  host: 'localhost',
  database: ' ',
  password: ' ',
  port: 6969,
});

app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Database Error');
  }
});

app.post('/api/users', async (req, res) => {
  const { nama_lengkap, email, nomor_telepon, alamat, password } = req.body;
  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: 'Pengguna sudah terdaftar dengan email ini.' });
    }
    await pool.query(
      'INSERT INTO users (nama_lengkap, email, nomor_telepon, alamat, password) VALUES ($1, $2, $3, $4, $5)',
      [nama_lengkap, email, nomor_telepon, alamat, password]
    );
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).send('Database error');
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      if (result.rows[0].password === password) {
        return res.json({ success: true, user: result.rows[0] });
      }
      return res.status(401).json({ success: false, message: 'Email atau password salah' });
    }
    res.status(401).json({ success: false, message: 'Email atau password salah' });
  } catch (err) {
    res.status(500).send('Error saat login. Silakan coba lagi.');
  }
});

app.listen(5000, () => {
  console.log('Server berjalan di http://localhost:5000');
});
