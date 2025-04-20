const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 1337;

exports.isAuthenticated = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
const userRoutes = require('./route/userRoutes');
const postRoutes = require('./route/postRoutes');

// Middleware: For handling JSON payloads
app.use(bodyParser.json());

// Middleware: Serve both public and views folders
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.static(path.join(__dirname, '../client/views')));


// API Routes
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);
app.use(session
    ({
    secret: 'gamebuddysecret',
    resave: false,
    saveUninitialized: true
  }));
  

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/login.html'));
});

// Feed page route
app.get('/feed', (req, res) => {
    const feedFilePath = path.join(__dirname, '../client/views/feed.html');
    console.log(feedFilePath);
    res.sendFile(feedFilePath);
});

// Sign up and Login page routes
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    console.log(`New user signed up: ${username}, ${email}`);

    // Redirect back to the homepage for now until we add the background stuff in later
    res.redirect('/');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`User logged in: ${username}`);
    
    // Redirect back to the homepage for now until we add the background stuff in later
    res.redirect('/');
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

