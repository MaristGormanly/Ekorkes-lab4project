const pool = require('../db');

// Get all posts
exports.getAllPostsService = async () => 
{
  const result = await pool.query('SELECT * FROM posts ORDER BY id DESC');
  return result.rows;
};

// Get a single post by ID
exports.getPostService = async (index) => 
{
  const result = await pool.query('SELECT * FROM posts WHERE id = $1', [index]);
  return result.rows[0];
};

// Save a new post
exports.savePostService = async (postData) => 
{
  const { content, username } = postData;

  const result = await pool.query(
    'INSERT INTO posts (content, username) VALUES ($1, $2) RETURNING *',
    [content, username]
  );

  return result.rows[0];
};

// Update post completely
exports.updatePostService = async (index, postData) => 
{
  const { content, username } = postData;

  const result = await pool.query(
    'UPDATE posts SET content = $1, username = $2 WHERE id = $3 RETURNING *',
    [content, username, index]
  );

  return result.rows[0];
};

// Partially update a post
exports.patchPostService = async (index, postData) => 
{
  const fields = [];
  const values = [];
  let count = 1;

  for (const key in postData) 
  {
    fields.push(`${key} = $${count}`);
    values.push(postData[key]);
    count++;
  }

  values.push(index);
  const sql = `UPDATE posts SET ${fields.join(', ')} WHERE id = $${count} RETURNING *`;

  const result = await pool.query(sql, values);
  return result.rows[0];
};

// Delete a post
exports.deletePostService = async (index) => 
{
  await pool.query('DELETE FROM posts WHERE id = $1', [index]);
};
