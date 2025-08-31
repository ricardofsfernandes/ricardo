const express = require('express');
const app = express();

app.use(express.json());

// Simulação de um banco de dados
const users = [{ email: 'user@example.com', password: '123456' }];

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.status(200).send({ message: 'Login bem-sucedido!' });
  } else {
    res.status(401).send({ message: 'Credenciais inválidas!' });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
