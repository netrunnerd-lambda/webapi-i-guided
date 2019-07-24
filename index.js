const express = require('express');

const db = require('./data/hubs-model');
const server = express();
const port = 4000;

server.get('/', (req, res) => res.send('hello, world'));

server.get('/now', (req, res) => res.send({ now: Date.now() }));

// hubs

server.get('/hubs', (req, res) => {
  db
    .find()
    .then(hubs => res.status(200).json({ success: true, hubs }))
    .catch(err => res.status(500).json({ success: false, err }));
});

server.get('/hubs/:id', (req, res) => {
  const { id } = req.params;

  db
    .findById(id)
    .then(hub => res.status(200).json({ success: true, hub }))
    .catch(err => res.status(500).json({ success: false, err }));
});

server.post('/hubs', (req, res) => {
  const newHub = req.body;

  db
    .add(newHub)
    .then(hub => res.status(201).json({ success: true, hub }))
    .catch(err => res.status(500).json({ success: false, err }));
});

server.listen(port, _ => console.log(`listening on port ${port}`));
