const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/ai-bid', (req, res) => {
  const { item, bid } = req.body;

  if (!item || !bid) {
    return res.status(400).json({ error: 'Item name and bid are required.' });
  }

  // Simulate AI-generated bid logic
  const aiBid = (parseFloat(bid) * (1 + Math.random() * 0.2)).toFixed(2);

  res.json({ aiBid });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
