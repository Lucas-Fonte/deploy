require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build")));

app.get('/api', (req, res) => res.json({ hello : 'dude'}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));