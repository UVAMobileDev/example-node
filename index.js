const express = require('express');
const formidable = require('formidable');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
    res.sendFile('./dropdowns/index.html', {root: __dirname })
});

app.post('/submit', (req, res) => {
    const form = formidable({ multiples: true });

  form.parse(req, (err, fields) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields });
  });
});


app.listen(port, () => console.log("Listening at Localhost", port));