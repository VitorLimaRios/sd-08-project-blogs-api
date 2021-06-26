const express = require('express');

const app = express();

app.use(express.json());

const { router } = require('./routes/user');

app.use('/user', router);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
