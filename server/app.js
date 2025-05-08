const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 1337;

// Apply session middleware first to ensure session is available in routes
app.use(session
({
    secret: 'gamebuddysecret',
    resave: false,
    saveUninitialized: true
}));

// Middleware: For handling JSON payloads
app.use(bodyParser.json());

// Middleware: Serve both public and views folders
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../client/views')));

// API Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);

// Routes for serving HTML pages
app.get('/', (req, res) => 
    {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

app.get('/signup', (req, res) => 
    {
  res.sendFile(path.join(__dirname, '../client/views/signup.html'));
});

app.get('/login', (req, res) => 
    {
  res.sendFile(path.join(__dirname, '../client/views/login.html'));
});

// Feed page route
app.get('/feed', (req, res) => 
    {
  const feedFilePath = path.join(__dirname, '../client/views/feed.html');
  res.sendFile(feedFilePath);
});

// Sign up and Login page routes (POST requests)
app.post('/signup', (req, res) => 
    {
  const { username, email, password } = req.body;
  console.log(`New user signed up: ${username}, ${email}`);
  
  // Placeholder logic for signup
  res.redirect('/');  // Redirect to homepage after signup for now
});

app.post('/login', (req, res) => 
    {
  const { username, password } = req.body;
  console.log(`User logged in: ${username}`);
  
  // Sample login logic (replace with actual user validation logic)
  const user = { username, email: `${username}@example.com` };  // Placeholder user data

  req.session.user = user;  // Store user info in session
  res.redirect('/feed');  // Redirect to the feed page after successful login
});

// Catch-all 404 route for undefined routes
app.use((req, res, next) => 
    {
  res.status(404).send({ message: "Page not found" });
});

// Start the server
app.listen(PORT, () => 
    {
  console.log(`Server is running on port ${PORT}`);
});
