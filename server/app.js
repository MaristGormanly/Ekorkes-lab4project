const express = require('express');
const path = require('path');  
const app = express();
const PORT = 1337;

// Middleware
app.use(express.static('client/public'));
app.use(express.urlencoded({ extended: true })); 

// Routes
app.get('/', (req, res) => 
{ 
    res.sendFile(path.join(__dirname, '../client/views/index.html')); 
});

app.get('/signup', (req, res) => 
{ 
    res.sendFile(path.join(__dirname, '../client/views/signup.html'));
});

app.post('/signup', (req, res) => 
{
    const { username, email, password } = req.body;
    console.log(`New user signed up: ${username}, ${email}`);

    // Redirect back to the homepage for now until we add the background stuff in later
    res.redirect('/');
});

app.listen(PORT, () => 
{
    console.log(`Server is running on port ${PORT}`);
});

