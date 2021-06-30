const express = require('express');
const users = require('./routes/user');
const categories = require('./routes/category');

const app = express();
app.use(express.json());
app.use('/', users);
app.use('/', categories);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
