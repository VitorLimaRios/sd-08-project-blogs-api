const express = require('express');
const { User } = require('../models');

const router = express.Router();

const { validateNewUser } = require('../middlewares/users');

const badRequest = 400;
const conflict = 409;

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// // Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findByPk(id);

//     if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

//     return res.status(200).json(user);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

// // Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// // URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
// router.get('/search/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email } = req.query;
//     const user = await User.findOne({ where: { id, email }});

//     if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

//     return res.status(200).json(user);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
router.post('/', validateNewUser, async (req, res) => {
  const { displayName, email, password, image } = req.body;

    if (!email) { 
      return res.status(badRequest).json({ message: '"email" is required' }); 
    }

    const useremail = await User.findOne({ where: { email } });

    if (useremail) return res.status(conflict).json({ message: 'User already registered' });

    if (!password) { 
      return res.status(badRequest).json({ message: '"password" is required' }); 
    }

  try {
    const newUser = await User.create({ displayName, email, password, image });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// // Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
// router.put('/:id', async (req, res) => {
//   try {
//     const { fullName, email } = req.body;
//     const { id } = req.params;

//     const [updateUser] = await User.update(
//       { fullName, email },
//       { where: { id } },
//     );

//     console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado;

//     if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

//     return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

// // Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteUser = await User.destroy(
//       { where: { id } },
//     );

//     console.log(deleteUser) // confira o que é retornado quando o user com o id é ou não encontrado;

//     return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

module.exports = router;