const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, MERN!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
