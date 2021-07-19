const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const User = require('./controllers/users');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', rescue(User.addUser));

app.use((err, _req, res, _next) => {
  const { code, message } = err;
  res.status(code).json({ message });
});
