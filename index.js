
const express = require('express');
const path = require('path');
const app = express();

// Main route serves TranquilLink
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'TranquilLink.html'));
});

// NeoBites route
app.get('/neobites', (req, res) => {
  res.sendFile(path.join(__dirname, 'NeoBites.html'));
});

// Serve static files after routes
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
