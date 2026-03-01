const express = require('express');
const cors = require('cors');

const app = express();

// === MIDDLEWARES ===
app.use(cors());
app.use(express.json());

// === HEALTH CHECK ROUTE ===
app.get('/api/simulacro', (req, res) => {
  res.json({
    ok: true,
    message: 'SaludPlus API is running'
  });  
});

module.exports = app;