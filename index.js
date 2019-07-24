const express = require('express');

const server = express();
const port = 4000;

server.get('/', (req, res) => res.send('hello, world'));

server.get('/now', (req, res) => res.send({ now: Date.now() }));

server.listen(port, _ => console.log(`listening on port ${port}`));
