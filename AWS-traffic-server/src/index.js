const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Sent POSTs pls.');
});

app.post('/rev', (req, res) => {
  res.send(req.body.split('').reverse().join(''))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
