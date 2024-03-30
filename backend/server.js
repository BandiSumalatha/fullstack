const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body;
   fs.appendFileSync('form-data.txt', JSON.stringify(formData) );
  res.send('Form data submitted successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
