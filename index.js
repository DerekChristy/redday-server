const express = require('express');
const app = express();
const cors = require('cors');
const apiRoute = require('./routes/api');
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', apiRoute);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log('Server listening at ' + PORT);
});
