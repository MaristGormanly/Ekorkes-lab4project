const express = require('express');
const path = require('path');  
const app = express();
const PORT = 1337;

// Gets static files from Public folder
app.use(express.static('client/public'));

app.get('/', (req, res) => 
{ 
    res.sendFile(path.join(__dirname, '../client/views/index.html')); 
});

app.listen(PORT, () => 
{
    console.log('Server is running on port 1337');
});
