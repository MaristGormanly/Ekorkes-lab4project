const pool = require('../db'); // This connects to your PostgreSQL database

// Get all users
exports.getAllUsersService = async () => 
{
  const result = await pool.query('SELECT * FROM users ORDER BY id');
  return result.rows;
};

// Get user by index
exports.getUserService = async (index) => 
{
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [index]);
  return result.rows[0];
};

// Save a new user
exports.saveUserService = async (userData) => 
{
  const { username, email, password } = userData;

  const result = await pool.query
  (
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, password]
  );

  return result.rows[0];
};

// Update full user
exports.updateUserService = async (index, userData) => 
{
  const { username, email, password } = userData;

  const result = await pool.query
  (
    'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
    [username, email, password, index]
  );

  return result.rows[0];
};

// Patch user
exports.patchUserService = async (index, userData) => 
{
  const fields = [];
  const values = [];
  let count = 1;

  for (const key in userData) 
  {
    fields.push(`${key} = $${count}`);
    values.push(userData[key]);
    count++;
  }

  values.push(index);
  const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = $${count} RETURNING *`;

  const result = await pool.query(sql, values);
  return result.rows[0];
};

// Delete user
exports.deleteUserService = async (index) => 
{
  await pool.query('DELETE FROM users WHERE id = $1', [index]);
};

